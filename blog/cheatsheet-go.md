---
title: Go Cheatsheet
description: My commonly used go utility functions.
keywords: [go]
---

## Check

I like Go, but I often find myself wishing that it had slightly more implicit error handling. I prefer keeping my `main.go` as short and easy to read as possible, so it's important for me not to clutter it with `if err != nil { panic(err) }`.

```go
func check(err error) {
	if err != nil {
		panic(err)
	}
}
```

### Example Usage

```go
func main() {
  db, err := initDB(url)
  check(err)
}
```

## Get

Go's `os.Getenv(key)` is not perfect. I don't like having to write:

```go
func init() {
  port := os.Getenv("PORT")
  if len(port) == 0 {
    port = "8080"
  }
}
```

```go
func get(key string, fallbacks ...string) string {
	v := os.Getenv(key)
	if len(v) == 0 {
		if len(fallbacks) > 0 {
			return fallbacks[0]
		}
		panic("env variable '" + key + "' not found.")
	}
	return v
}
```

### Example Usage

```go
var (
  port  string
  dbURL string
)

func init() {
  // with a default value
  port := get("PORT", "8080")
  // will panic if not found
  dbURL := get("DATABASE_URL")
}
```