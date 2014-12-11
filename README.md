it-ebooks.info-downloader
=========================
Ebook downloader ini dibangun pada lingkungan nodejs, yang secara khusus melakukan pengunduhan ebook (pdf) pada website http://it-ebooks.info.

Pengunduhan ebook tidak dilakukan dengan cara melakukan scrapping pada halaman tertentu pada website http://it-ebooks.info hingga mendapatkan link pengunduhan ebook, namun menggunakan API yang sudah di sediakan oleh http://it-ebook.info

Instalasi
=========
Masuk ke root direktori
```bash
cd it-ebooks.info-downloader
npm install
```

Perintah
========
Melihat bantuan
```bash
./bin/it-ebooks -h
```

Melakukan pencarian ebook
```bash
./bin/it-ebooks -s javascript


info: [-] You are searching: "javascript"
info: [-] Total ebook[s] found: 321

ID          | Title                                 |               SubTitle
----------  | ------------------------------------  | -------------------------------------------
1196558874  | Head First JavaScript                 | A Learner's Companion to JavaScript
1195998323  | JavaScript: The Good Parts            | Unearthing the Excellence in JavaScript
1689934194  | Learning JavaScript Design Patterns   | A JavaScript and jQuery Developer's Guide
3234496620  | Learning JavaScript                   | A Hands-On Guide to the Fundamentals of ...
3285308904  | JavaScript Enlightenment              | From Library User to JavaScript ...
421958423   | Getting Started with Meteor.js ...    | Develop modern web applications in ...
3812702641  | JavaScript Testing with Jasmine       | JavaScript Behavior-Driven Development
469878427   | JavaScript for PHP Developers         | A Concise Guide to Mastering JavaScript
2752282535  | JavaScript Testing                    | Test and debug JavaScript the easy way
3733509927  | Object-Oriented JavaScript            | Create scalable, reusable high-quality ...
```
