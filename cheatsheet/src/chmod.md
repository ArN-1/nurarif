# chmod


| Mode | Representasi | Penjelasan                                                                                       |
|------|--------------|--------------------------------------------------------------------------------------------------|
| `700` | `-rwx------` | File dapat dibaca, ditulis, dan dieksekusi oleh pemiliknya saja.                                 |
| `600` | `-rw-------` | File dapat dibaca dan ditulis oleh pemiliknya saja, tidak dapat diakses oleh pengguna lain.       |
| `755` | `-rwxr-xr-x` | File dapat dibaca, ditulis, dan dieksekusi oleh pemiliknya. Pengguna lain hanya dapat membaca dan mengeksekusi file. Direktori dapat diakses oleh pengguna lain untuk menavigasi. |
| `644` | `-rw-r--r--` | File dapat dibaca dan ditulis oleh pemiliknya. Pengguna lain hanya dapat membaca file.           |
| `666` | `-rw-rw-rw-` | File dapat dibaca dan ditulis oleh semua pengguna.                                                |
| `777` | `-rwxrwxrwx` | File dapat dibaca, ditulis, dan dieksekusi oleh semua pengguna.                                   |
