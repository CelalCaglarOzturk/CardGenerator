package main

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"golang.org/x/crypto/bcrypt"
)

var db *sql.DB

func main() {
	version := "0.0.2"
	port := ":2023"
	app := fiber.New()

	app.Use(logger.New(logger.Config{
		Format: "[${ip}]:${port} ${status} - ${method} ${path}\n",
	}))

	// frontend'in çalıştığı adresi buraya ornek.com yerine ekleyin
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:5173, https://ornek.com",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	fmt.Println("Server version: " + version)
	fmt.Println("Checking database connection...")
	db = InitDB() // initialize postgres via database/sql
	Migrate(db)   // do table migrations for portability

	app.Post("/api/v1/register", register)
	app.Post("/api/v1/login", login)
	app.Post("/api/v1/fetchprofile", fetchProfileInfo)
	app.Post("/api/v1/setprofile", setProfileInfo)

	app.Get("/api/v1/recommendations", getRecommendation)
	app.Post("/api/v1/recommendations", setRecommendation)

	fmt.Println("Server successfully started on port " + port[1:])
	log.Fatal(app.Listen(port))
}

func register(c *fiber.Ctx) error {
	c.Accepts("application/json")
	payload := struct {
		Id       string `json:"Id"`
		Email    string `json:"Email"`
		Password string `json:"Password"`
	}{}

	if err := c.BodyParser(&payload); err != nil {
		return c.SendStatus(400)
	}
	if IsIdValid(payload.Id) {
	} else {
		return c.SendStatus(400)
	}
	if IsPasswordValid(payload.Password) {
	} else {
		return c.SendStatus(400)
	}

	token, err := bcrypt.GenerateFromPassword([]byte(payload.Password), bcrypt.DefaultCost) // string(token) is 60 digits
	if err != nil {
		return c.SendStatus(400)
	}

	hashedPassword := HashSha256GetHex(payload.Password)

	if IsEmailValid(payload.Email) {
		_, err := db.Exec("INSERT INTO users (okul_no, email, pass_hash, token) VALUES ($1, $2, $3, $4)", payload.Id, payload.Email, hashedPassword, string(token))
		if err != nil {
			return c.SendStatus(400)
		}
	} else {
		_, err := db.Exec("INSERT INTO users (okul_no, pass_hash, token) VALUES ($1, $2, $3)", payload.Id, hashedPassword, string(token))
		if err != nil {
			return c.SendStatus(400)
		}
	}

	_, err1 := db.Exec("INSERT INTO userinfo (userid) VALUES ($1)", payload.Id)
	if err1 != nil {
		return c.SendStatus(400)
	}

	Cred := struct {
		Token string `json:"token"`
		Id    string `json:"Id"`
	}{}

	Cred.Token = string(token)

	return c.JSON(Cred)
}

func login(c *fiber.Ctx) error {
	c.Accepts("application/json")
	payload := struct {
		Id       string `json:"Id"`
		Password string `json:"Password"`
	}{}

	if err := c.BodyParser(&payload); err != nil {
		return c.SendStatus(400)
	}
	if IsIdValid(payload.Id) {
	} else {
		return c.SendStatus(400)
	}
	if IsPasswordValid(payload.Password) {
	} else {
		return c.SendStatus(400)
	}

	hashedPassword := HashSha256GetHex(payload.Password)

	var token string
	err := db.QueryRow("SELECT token FROM users WHERE okul_no=$1 AND pass_hash=$2", payload.Id, hashedPassword).Scan(&token)
	if err != nil {
		return c.SendStatus(400)
	}

	if len(token) < 1 {
		return c.SendStatus(400)
	}

	Cred := struct {
		Token string `json:"token"`
		Id    string `json:"Id"`
	}{}

	Cred.Token = string(token)

	return c.JSON(Cred)
}

func fetchProfileInfo(c *fiber.Ctx) error {
	c.Accepts("application/json")
	if IsTokenValid(GetHeaderValue(c, "Authorization"), db) {
	} else {
		return c.SendStatus(400)
	}
	payload := struct {
		Id string `json:"Id"`
	}{}

	if err := c.BodyParser(&payload); err != nil {
		fmt.Println(err)
		return c.SendStatus(400)
	}

	if IsIdValid(payload.Id) {
	} else {
		return c.SendStatus(400)
	}
	if IsUserExists(payload.Id, db) {
	} else {
		return c.SendStatus(400)
	}

	resPayload := struct {
		Ad        string `json:"Ad"`
		Soyad     string `json:"Soyad"`
		Giris     string `json:"Giris"`
		Mezuniyet string `json:"Mezuniyet"`
		Egitim    string `json:"Egitim"`
		Isyeri    string `json:"Isyeri"`
		Sehir     string `json:"Sehir"`
	}{}

	var id, userid string
	var egitim, isyeri string
	var ad, soyad, giris_yili, mezuniyet_yili, sehir string
	row := db.QueryRow("SELECT * FROM userinfo WHERE userid = $1", payload.Id)
	err := row.Scan(&id, &userid, &ad, &soyad, &giris_yili, &mezuniyet_yili, &egitim, &isyeri, &sehir)
	if err != nil {
		fmt.Println(err)
	}

	resPayload.Ad = ad
	resPayload.Soyad = soyad
	resPayload.Giris = giris_yili
	resPayload.Mezuniyet = mezuniyet_yili
	resPayload.Egitim = egitim
	resPayload.Isyeri = isyeri
	resPayload.Sehir = sehir

	return c.JSON(&resPayload)
}

func setProfileInfo(c *fiber.Ctx) error {
	c.Accepts("application/json")
	if IsTokenValid(GetHeaderValue(c, "Authorization"), db) {
	} else {
		return c.SendStatus(400)
	}

	payload := struct {
		Id        string `json:"Id"`
		Ad        string `json:"Ad"`
		Soyad     string `json:"Soyad"`
		Giris     string `json:"Giris"`
		Mezuniyet string `json:"Mezuniyet"`
		Egitim    string `json:"Egitim"`
		Isyeri    string `json:"Isyeri"`
		Sehir     string `json:"Sehir"`
	}{}

	if err := c.BodyParser(&payload); err != nil {
		return c.SendStatus(400)
	}

	if IsIdValid(payload.Id) {
	} else {
		return c.SendStatus(400)
	}
	if IsPlainTextValid(payload.Ad) {
	} else {
		return c.SendStatus(400)
	}
	if IsPlainTextValid(payload.Soyad) {
	} else {
		return c.SendStatus(400)
	}
	if IsPlainTextValid(payload.Egitim) {
	} else {
		return c.SendStatus(400)
	}
	if IsPlainTextValid(payload.Isyeri) {
	} else {
		return c.SendStatus(400)
	}
	if IsPlainTextValid(payload.Sehir) {
	} else {
		return c.SendStatus(400)
	}
	if IsYearValid(payload.Giris) {
	} else {
		return c.SendStatus(400)
	}
	if IsYearValid(payload.Mezuniyet) {
	} else {
		return c.SendStatus(400)
	}

	if IsAccountAuthorized(payload.Id, GetHeaderValue(c, "Authorization"), db) {
	} else {
		return c.SendStatus(400)
	}

	_, err := db.Exec("UPDATE userinfo SET ad=$1, soyad=$2, giris_yili=$3, mezuniyet_yili=$4, egitim=$5, isyeri=$6, sehir=$7 WHERE userid = $8", payload.Ad, payload.Soyad, payload.Giris, payload.Mezuniyet, payload.Egitim, payload.Isyeri, payload.Sehir, payload.Id)
	if err != nil {
		fmt.Println(err)
	}

	Test := struct {
		Test string `json:"test"`
	}{}

	return c.JSON(Test)
}

type oneriStruct struct {
	Okul_no string `json:Okul_no`
	Oneri   string `json:Oneri`
}

func getRecommendation(c *fiber.Ctx) error {
	c.Accepts("application/json")
	if IsTokenValid(GetHeaderValue(c, "Authorization"), db) {
	} else {
		return c.SendStatus(400)
	}

	rows, err := db.Query("select okul_no, oneri from recommendations")
	if err != nil {
		fmt.Println(err)
	}
	defer rows.Close()

	results := []oneriStruct{}
	for rows.Next() {
		tekliOneri := oneriStruct{}
		err = rows.Scan(&tekliOneri.Okul_no, &tekliOneri.Oneri)
		if err != nil {
			log.Println(err)
		}
		results = append(results, tekliOneri)
	}

	err = rows.Err()
	if err != nil {
		c.SendStatus(404)
	}

	return c.JSON(&results)
}

func setRecommendation(c *fiber.Ctx) error {
	c.Accepts("application/json")
	if IsTokenValid(GetHeaderValue(c, "Authorization"), db) {
	} else {
		return c.SendStatus(400)
	}

	payload := struct {
		Id    string
		Oneri string
	}{}

	if err := c.BodyParser(&payload); err != nil {
		return c.SendStatus(400)
	}

	if IsAccountAuthorized(payload.Id, GetHeaderValue(c, "Authorization"), db) {
	} else {
		return c.SendStatus(400)
	}

	if IsIdValid(payload.Id) {
	} else {
		return c.SendStatus(400)
	}

	var okul_no string
	row := db.QueryRow("select okul_no from recommendations where okul_no = $1", payload.Id)
	row.Scan(&okul_no)

	fmt.Println(okul_no)
	if okul_no == payload.Id {
		_, err := db.Exec("update recommendations set oneri = $2 where okul_no = $1;", payload.Id, payload.Oneri)
		if err != nil {
			fmt.Println(err)
		}
	} else {
		_, err := db.Exec("insert into recommendations(okul_no, oneri) values ($1, $2);", payload.Id, payload.Oneri)
		if err != nil {
			fmt.Println(err)
		}
	}

	return c.SendStatus(200)
}
