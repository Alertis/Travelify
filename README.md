<!-- PROJECT SHIELDS -->
[![Build Status][build-shield]]()
[![Contributors][contributors-shield]]()
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Twitter](https://img.shields.io/twitter/follow/Alertisx?label=Twitter&style=social)](https://twitter.com/Alertisx)
[![GitHub followers](https://img.shields.io/github/followers/Alertis.svg?style=social&label=Follow)](https://github.com/Alertis?tab=followers)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Alertis/memorize">
    <h3></h3>
  </a>

  <h3 align="center">Travelify</h3>

  <p align="center">
   Manisa Celal Bayar Üniversitesi Hasan Ferdi Turgutlu Teknoloji Fakültesi Yazılım Mühendisliği Bölümü YZM 4101 – Profesyonel Yazılım Geliştirme dersi kapsamındaki bitirme projesi. </p>
   <p align="center">
   182803075 - Osman Yavuz Demir (Uygulama Geliştirme) <br />
   172803027 - İsa Toltar (Backend Geliştirme) <br />
   Danışman: Dr. Öğr. Üyesi Müge Özçevik
   </p>
    <p align="center">
    ·
    <a href="https://github.com/Alertis/Travelify/issues">Report Bug</a>
    ·
    <a href="https://github.com/Alertis/Travelify/issues">Request Feature</a>
      ·
    <a href="https://github.com/toltarisa/travelify-backend">Backend Projesi</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## İçerik

* [Proje Hakkında](#proje-hakkında)
  * [Kullanılan Paketler](#kullanılan-paketler)
* [Başlangıç](#başlangıç)
  * [Gereksinimler](#gereksinimler)
  * [Kurulum](#kurulum)
* [Kullanımı](#kullanımı)
* [İletişim](#iletişim)



<!-- ABOUT THE PROJECT -->
## Proje Hakkında

[![Product Name Screen Shot][product-screenshot-1]](https://github.com/Alertis/Travelify/blob/main/screenshots/screenshots.png)

<p>
Travelify uygulaması mobil platformlarda (Android/IOS) hizmet verecek bir rehber uygulamasıdır. Proje için geliştirilecek API projesi İsa Toltar tarafından geliştirilmiştir. Uygulama projesi Osman Yavuz Demir tarafından geliştirildi. Uygulamanın geliştirme sürecinde yapmış olduğu desteklerden dolayı proje danışmanı Dr. Öğr. Üyesi Müge Özçevik’e teşekkür ederiz.
</p>

<p>
Uygulama, seyehat noktalarını kategorilere ayırarak kullanıcıların karşısına çıkarmaktadır. Kullanıcı dilerse seçtiği kategoriye veya belirttiği kelimeye uygun yerleri de listeleyebilecektir. Bu sayede kullanıcılar tatil, gezi vb. planlamalarını bu uygulama üzerinden yapıp hazırlık aşamasında daha az vakit kaybedeceklerdir.
</p>

<p>
Kullanıcılar, listelenen gezilecek yerlerin detay sayfasında diğer kullanıcıların daha önce paylaştıkları fotoğrafları ve yorumları görebilecekleri gibi kendileri de o yere ait fotoğraf ve yorum ekleyebileceklerdir. Bu sayede kullanıcılar o bölgeye gitmeden de hem yorumlar hem de fotoğraflar sayesinde fikir sahibi olabilecektir.
</p>

<p>
Kullanıcılar uygulamaya diğer kullanıcılar tarafından eklenen bölgeleri görebilecekleri gibi yetkileri dahilinde daha önce eklenmemiş bölgeleri de isterlerse sisteme ekleyebileceklerdir veya daha önce eklenen bölgelerin kaldırılması ya da bilgilerinin değiştirilmesi sağlanacaktır.
</p>

### Kullanılan Paketler
Uygulama geliştirme sırasında aşağıdaki paketlerden yararlanılmıştır.
* [React Native](https://facebook.github.io/react-native/)
* [React Native Local Storage](https://www.npmjs.com/package/react-native-local-storage)
* [React Native Paper](https://reactnativepaper.com/)
* [React Native Image Picker](https://github.com/react-native-image-picker/react-native-image-picker)
* [React Native Maps](https://www.npmjs.com/package/react-native-maps)
* [Redux](https://redux.js.org/)



<!-- GETTING STARTED -->
## Başlangıç

Projeyi kendi bilgisayarınıza kurmak için aşağıdaki adımları takip edebilirsiniz.

### Gereksinimler

Projeyi çalıştırabilmek için aşağıdaki paketleri yüklemeniz gerekmekte
* npm
```sh
npm install npm@latest -g
```
* React Native
```sh
npm install -g react-native-cli
```

### Kurulum

1. Github reposunu klonlayın
```sh
git clone https://github.com/Alertis/Travelify
```
2. NPM paketlerini kurun
```sh
npm install
```



<!-- USAGE EXAMPLES -->
## Kullanımı

<b> Açılış ekranı </b> kullanıcı uygulamaya ilk girdiği sırada ortaya çıkacaktır. Bu ekranda kullanıcıyı bir giriş yazısı ile birlikte Giriş Yap ve Kayıt Ol şeklinde iki menü karşılamaktadır. Bu butonlar kullanıcıyı ilgili sayfalara yönlendirecektir.<br/>

<b> Kayıt ol </b>  ekranında daha önce sisteme kayıt olmayan kullanıcının sistem tarafından istenilen bilgileri girerek sisteme ücretsiz ve kolay bir şekilde kayıt olması beklenir.<br/>

<b> Şifremi Unuttum </b>  ekranında Daha önce kayıt olmuş ve çıkış yapmış ya da uygulamayı kaldırıp tekrardan yüklemiş kullanıcının sisteme giriş yapmaya çalışırken şifresini hatırlayamadığı durumda kullanılması beklenen ekrandır. Kullanıcı sisteme kayıt olduğu e-posta adresini girer ve kullanıcıya bir kod mail olarak gider daha sonra bu kodu kopyalayarak uygulamaya girer ve ardından yeni bir şifre oluşturabilir.<br/>

<b> Giriş Yap </b>  ekranında Başarılı bir şekilde kayıt olan kullanıcının e-posta ve şifresi ile sisteme giriş yapabildiği ekrandır.<br/>

<b> Ana Ekran</b>  Sisteme eklenen kategorilerin, menülerin ve kullanıcının lokasyon arayabileceği lokasyon arama bölümünün bulunduğu ana ekrandır.<br/>

<b> Listeleme Ekran </b>  Sisteme eklenmiş olan lokasyonların listelendiği ekrandır. Bu ekrana kullanıcılar 3 farklı şekilde ulaşılabilirler. Ana ekrandan kategoriye tıklanması durumunda bu sayfada seçilen kategoriye ait konumlar listelenir. Ana ekrandan Yakınımdakiler menüsüne tıklanması
halinde bu ekranda kullanıcının mevcut konumuna en yakın konumlar listelenir. Ana ekrandaki arama bölümü aracılığı ile arama yapılması durumunda bu ekranda aranan kelimeye en yakın konumlar listelenir.<br/>

<b> Detay Ekranı </b>  Bu ekrana listelenen lokasyonun detayına gitmek istediğiniz zaman ulaşırsınız. Üst kısımda lokasyonun adını ve yer ile ilgili açıklamaya ulaşabilirken alt kısımda sırasıyla Yorumlar, fotoğraflar ve Harita menülerine ulaşabilirsiniz. Yorumlar menüsünde bu
lokasyona daha önceden yapılan yorumları listeleyebilir ve yeni yorumlar ekleyebilirsiniz. Fotoğraflar sekmesinde bu lokasyonla ilgili sizin veya diğer kullanıcıların eklediği fotoğraflara ulaşabilirsiniz. Harita menüsü altında ise lokasyonun konumunu görebilirsiniz. Ayrıca üste bulunan butonlar ile yetkiniz dahilinde lokasyonlar ile ilgili işlemler yapabilirsiniz.<br/>

<b> Lokasyon Ekleme </b> Bu ekranda gerekli bilgileri girip konumun kategorisini seçtiğiniz takdirde mevcut konumuzu girdiğiniz bilgilerle seçtiğiniz kategoriye yeni bir lokasyon olarak ekleyecektir.Ayrıca açılan ekranın en altındaki haritada mevcut lokasyonunuzu görerek doğru konumda işlem yapıp yapmadığınızdan emin olabileceksiniz.<br/>

<b> Fotoğraf Ekleme </b>Bu ekranda seçtiğiniz lokasyona fotoğraf eklemek için telefonun galerisi açılır ve ilgili resim seçilir. Seçilen resim önce bu ekranda görüntülenir ardında Seçilen Resmi Yükle butonuna dokunularak resmin sunucumuz seçilen lokasyonun bilgileri ile birlikte kayıt edilmesi sağlanır. <br/>

<b> Lokasyon Düzenleme </b> Bu ekranda düzenlemek istediğiniz konum için gerekli bilgileri girip konumun bilgilerinin
düzenlenmesini sağlayabilirsiniz. <br/>

<b> Ayarlar Ekranı </b> Bu ekranda sisteme giriş yapan kullanıcının bilgileri görüntülenmektedir. Ayrıca ekranın sonunda bulunana buton sayesinde kullanıcının sistemden çıkış yapmasını
sağlanabilmektedir. <br/>

<!-- CONTACT -->
## Iletişim

Osman Yavuz Demir - [@alertisx](https://twitter.com/Alertisx) - osmanyavuzdemir96@gmail.com

İsa Toltar - [@isatoltar](https://twitter.com/isatoltar) - [WEB](https://toltarisa.github.io/) -  isatoltar@gmail.com

<!-- MARKDOWN LINKS & IMAGES -->
[build-shield]: https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=flat-square
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://choosealicense.com/licenses/mit
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/osmanyavuzdemir/
[product-screenshot-1]:https://raw.githubusercontent.com/Alertis/Travelify/main/screenshots/screenshots.png?token=AG2ZA5T2S7Z6BC74OCKQLP3ACPRD2
