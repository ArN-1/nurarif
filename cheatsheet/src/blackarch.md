# Black Arch

| Direktori  | Deskripsi                                                                                           | Sub-Direktori                       |
|------------|-----------------------------------------------------------------------------------------------------|-------------------------------------|
| `/bin`     | Berisi perintah dasar atau biner yang diperlukan saat booting atau dalam single-user mode.          | Tidak ada sub-direktori.           |
| `/boot`    | Berisi file konfigurasi bootloader dan kernel.                                                       | Tidak ada sub-direktori.           |
| `/dev`     | Direktori perangkat yang berisi file yang merepresentasikan perangkat keras atau perangkat lunak.   | Tidak ada sub-direktori.           |
| `/etc`     | Direktori yang berisi konfigurasi sistem global.                                                     | Tidak ada sub-direktori.           |
| `/home`    | Direktori yang berisi direktori pengguna.                                                            | Nama pengguna sebagai sub-direktori.|
| `/lib`     | Direktori yang berisi library dinamis yang digunakan oleh program di `/bin` dan `/sbin`.             | Tidak ada sub-direktori.           |
| `/lib64`   | Direktori yang berisi library dinamis 64-bit.                                                        | Tidak ada sub-direktori.           |
| `/media`   | Mount point untuk perangkat media portabel seperti USB drive atau CD-ROM.                            | Tidak ada sub-direktori.           |
| `/mnt`     | Mount point untuk sementara yang digunakan oleh pengguna atau administrator sistem.                  | Tidak ada sub-direktori.           |
| `/opt`     | Direktori opsional yang digunakan untuk menginstal perangkat lunak tambahan.                        | Nama paket perangkat lunak sebagai sub-direktori.|
| `/proc`    | Virtual file system yang berisi informasi tentang proses sistem dan kernel.                          | Tidak ada sub-direktori.           |
| `/root`    | Direktori home untuk pengguna root.                                                                  | Tidak ada sub-direktori.           |
| `/run`     | Berisi file runtime yang dibutuhkan oleh sistem.                                                     | Tidak ada sub-direktori.           |
| `/sbin`    | Menyimpan perintah sistem penting yang biasanya hanya dapat dieksekusi oleh superuser.               | Tidak ada sub-direktori.           |
| `/srv`     | Direktori tempat data servis-spesifik diatur oleh administrator sistem.                             | Nama servis-spesifik sebagai sub-direktori.|
| `/sys`     | Berisi file yang merepresentasikan struktur hierarki perangkat dan driver dalam kernel Linux.        | Tidak ada sub-direktori.           |
| `/tmp`     | Direktori temporer yang digunakan oleh pengguna dan program.                                         | Tidak ada sub-direktori.           |
| `/usr`     | Direktori sekunder yang menyimpan sebagian besar file sistem dan program data.                       | Sub-direktori seperti `bin`, `sbin`, `lib`, dll.|
| `/var`     | Berisi data yang berubah saat runtime seperti log, database, dan cache.                              | Sub-direktori seperti `log`, `cache`, `lib`, dll.|