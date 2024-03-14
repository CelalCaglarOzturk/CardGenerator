package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

func InitDB() *sql.DB {
	// örnek
	// connStr := "postgresql://kullanıcıadı:şifre@adres/veritabanı"
	connStr := "postgresql://CelalCaglarOzturk:IpsW9JAgNul1@ep-solitary-sunset-a2x3cjrg.eu-central-1.aws.neon.tech/neondb?sslmode=require"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}

	rows, err := db.Query("select version()")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	var version string
	for rows.Next() {
		err := rows.Scan(&version)
		if err != nil {
			log.Fatal(err)
		}
	}

	fmt.Printf("version=%s\n", version)
	return db
}
