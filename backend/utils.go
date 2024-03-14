package main

import (
	"crypto/sha256"
	"encoding/base64"

	"github.com/gofiber/fiber/v2"
)

func HashSha256GetHex(str string) string {
	hasher := sha256.New()
	hasher.Write([]byte(str))
	return base64.URLEncoding.EncodeToString(hasher.Sum(nil))
}

func GetHeaderValue(c *fiber.Ctx, header string) string {
	return string(c.Request().Header.Peek(header))
}
