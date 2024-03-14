package main

import "database/sql"

func Migrate(db *sql.DB) {
	_, err := db.Exec("CREATE TABLE IF NOT EXISTS users (userid SERIAL NOT NULL PRIMARY KEY, okul_no CHAR(12) UNIQUE NOT NULL, email VARCHAR(60) UNIQUE, pass_hash VARCHAR(60) NOT NULL, token CHAR(60) NOT NULL UNIQUE, tur VARCHAR(20))")
	if err != nil {
		panic(err)
	}

	_, err1 := db.Exec("CREATE TABLE IF NOT EXISTS userinfo (id SERIAL PRIMARY KEY, userid CHAR(12), ad VARCHAR(40), soyad VARCHAR(20), giris_yili CHAR(4), mezuniyet_yili CHAR(4), egitim VARCHAR(200), isyeri VARCHAR(200), sehir varchar(20))")
	if err1 != nil {
		panic(err1)
	}

	_, err2 := db.Exec("CREATE TABLE IF NOT EXISTS recommendations (id SERIAL PRIMARY KEY, okul_no CHAR(12) unique, oneri VARCHAR(256))")
	if err2 != nil {
		panic(err2)
	}
}
