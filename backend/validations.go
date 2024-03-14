package main

import (
	"database/sql"
	"net/mail"
	"regexp"
	"strconv"
)

func IsEmailValid(email string) bool {
	_, err := mail.ParseAddress(email)
	return err == nil
}

func IsIdValid(no string) bool {
	if len(no) != 12 {
		return false
	}
	if no[4:7] != "114" && no[4:7] != "214" {
		return false
	}

	_, err := strconv.Atoi(no)
	if err == nil {
	} else {
		return false
	}

	return true
}

func IsPasswordValid(pass string) bool {
	if len(pass) < 8 || len(pass) > 72 {
		return false
	}

	str, _ := regexp.MatchString("[^a-zA-Z0-9!.]+", pass)
	if !str {
	} else {
		return false
	} // go formatter doesn't like "return false" stays at the true statement

	return true
}

func IsUserExists(no string, db *sql.DB) bool {
	row := db.QueryRow("SELECT userid FROM userinfo WHERE userid = $1", no)
	temp := ""
	row.Scan(&temp)
	if temp == "" {
	} else {
		return true
	}
	return false
}

func IsTokenValid(token string, db *sql.DB) bool {
	row := db.QueryRow("select userid from users where token= $1", token)
	temp := ""
	row.Scan(&temp)
	if temp == "" {
	} else {
		return true
	}
	return false
}

func IsYearValid(year string) bool {
	if len(year) == 4 {
	} else {
		return false
	}

	_, err := strconv.Atoi(year)
	if err == nil {
	} else {
		return false
	}

	return true
}

func IsPlainTextValid(txt string) bool {
	str, _ := regexp.MatchString("[^a-zA-ZıIğĞüÜşŞçÇöÖ,. ]+", txt)
	if !str {
	} else {
		return false
	}

	return true
}

func IsAccountAuthorized(no string, token string, db *sql.DB) bool {
	var id string
	row := db.QueryRow("select okul_no from users where token= $1", token)
	row.Scan(&id)

	return id == no
}
