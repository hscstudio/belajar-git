# belajar-git

Repository ini dibuat untuk memudahkan kamu dalam belajar menggunakan git dengan cara langsung praktek. Sekaligus belajar bagaimana cara berkontribusi pada projek yang menggunakan git atau dalam hal ini github.

## Persiapan

Beberapa hal yang harus kamu persiapkan sebelum memulai semua ini.

### Instalasi Code Editor

Silakan instalasi code editor favoritmu, namun jika kamu tidak punya pilihan maka saya sarankan menggunakan Visual Studio Code di https://code.visualstudio.com

### Instalasi Software Git

Software git yang bisa kamu unduh di https://git-scm.com, silakan download sesuai dengan sistem operasi PCmu. Pada terminal atau command prompt (untuk kemudian saya hanya akan menyebut dengan terminal) jalankan perintah `git --version` untuk memastikan instalasi git berhasil.

> Jika perintah `git --version` gagal maka restart terminalmu sebelum menjalankan perintah ini.

### Registrasi Akun Github

Jika belum punya akun github, maka silakan registrasi pada alamat: https://github.com/join.

Hubungan komputermu dengan github, sehingga kamu tidak perlu memasukkan password githubmu ketika melakukan operasi pada suatu repository seperti saat proses push. 

- Buat SSH Keygen 
Catatan: Lewati langkah ini jika kamu sudah pernah membuatnya. SSH Keygen umumnya disimpan pada file: `~/.ssh/id_rsa.pub`.

SSH Keygen digunakan sebagai ID unik dari PC-mu. Pada terminal jalankan perintah berikut:

```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

> ganti your_email@example.com dengan email kamu gunakan. ikuti langkahnya sampai selesai.

- Copy isi dari SSH Key

Copy isi dari SSH Key yang telah kamu generate, biasanya file bisa kamu temukan pada lokasi `~/.ssh/id_rsa.pub`

- Paste SSH Key tersebut pada Github

Buka https://github.com/settings/keys, lalu klik tombol `New SSH Key` maka akan muncul form. 

Isi kolom title dengan nama komputermu sedangkan kolom key diisi dengan SSH Keygen atau isi dari file `~/.ssh/id_rsa.pub`. Lalu klik tombol Add SSH Key. 

Referensi: 
- https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
- https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account

- Konfigurasi Akun Git Pada PC / Terminal

Jalankan perintah berikut pada terminal, sehingga ketika kita akan melakukan operasi Git maka si Git tahu bahwa kita bertindak atas nama siapa :).

```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

> Ganti `you@example.com` dengan email kamu dan `Your Name` dengan nama kamu.

## Langkah-langkah
- Clone

## Istilah Penting



Hafid Mukhlasin
