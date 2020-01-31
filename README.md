<h1 align="center"> Muhteşem şeyler olacak </h1>
<h2> BitirmeProjesi </h2>

<h3> SENARYO </h3>
<p>
1- İlk başta super user olan kullanıcı bölümdü olan ve açılması mümkün olan dersleri ders tablosuna ekler.</br></br>
2- Dönemin başlangıcında öğrenciler gelmeden önce hocaların hesapları super user tarafından açılır ve şifre belirlenir. </br></br>
3- Her hoca kendi kullanıcı adı ve şifresiyle giriş yaparak vereceği dersiseçerk altına bazı bilgileri (ders haftalık saati, dersin işleneceği gün, saat, salon, dersin uygulama dersi olup olmadığı) ekler ve açılan dersler tablosuna ekler. </br></br>
4- Dönemin ilk haftasında öğrenciler tek seferliğine mahsus sign up yapıp (öğrenci numarası, email adresi, twitter kullanıcı adı, aldığı dersler) girmesi ve kendine şifre belirlemesi gerekiyor. </br></br>
5- Her hafta da ders başladığında "İÜ_BMG_335_NÖ_A_T" (burada İÜ = inönü üniversitesi, BMG = bilisayar mühendisliğine giriş, 335 = dersKodu, NÖ= normal öğretim, A= A şubesi ve T = ders teorik olduğunu ifade ediyor) şeklinde benzer hashtag açarak tweet yapacak. </br></br>
6- Sistem otomatik olarak haftada bir veya iki kere yapılan tweetler kontrol ederek açılan hashtagları çekecek. </br></br>
7- Çekilen hashtagları belli bir işlemden geçirerek lokasyon doğrulaması ve öğrenci ve ders araması yaparak veri tabanına kaydedecektir. </br></br>
8- Kaydedilen verileri işleme alarak hangi öğrenci hangi derse katıldığı, hangi derse hangi öğrenciler katıldıığı ve hangi öğrenci hangi dersten devamsılıktan kaldığını öğrenerek sistem liste oluştuuracak ve ilgili hocaya sunacaktır.</br></br>
9- Öğrencinin istediği zaman giriş yaparak her derste kullandığı devamsızlık hakkını ve varsa devamsızlıktan kaldığı dersi görebilecektir </br></br>
</p>
</br>
<hr>
</br>

# Problemler

1- Resim çekip konum eklemeye çalışıldığında eğer google mapst'te konum doğru değilse twitter doğru konum getiremiyor; google map'i açıp konumu güncelleyince twitter doğru konumu çekiyor ve artık tweet atabiliyoruz (doğru konumdan);

2- Hesap gizli olunca hesap sahibinin yaptığı aktivitelere erişemiyoruz (retweet, twett,falan);

3- Yapılan tweet'e yorumlu retweet yaparken anlık fotoğraf ekleyemiyoruz (twitter ile alakalı bir durum) dolayısıyla konum bilgisi alınamıyor. Ona bir çözüm olarak öğrencinin hocanın yaptığı tweet'i retweet yapması yerine kendisi tahta veya sınıfta bulunan nesnenin fotoğrafını çekerek dersin adını ve kodunu hashtag olarak yazdıktan sonra anlık tweet yapmalı;








# başlangıçta Yapılması Gerekenler
twitter api si kullanmak için twitter developpers de hesap oluşturak gerek
hesap oluşturduktan sonra token almak için içinde twitter api kullanılacak uygulama hakkında bilgi ve detay vererek başvurmak gerekiyor.
Başvuru onaylandıktan sonra bize consumer key ve access token veriliyor bu tokenleri kullanrak bizim projemize twitter den veri çekebilmek için gerekli yetkiyi vermiş oluruz.
yetkiyi verdikten sonra artık uygulamamızda developper.twitter sitesinde bulunan referansları dikkate alarak kodumuzu yazıp verimizi çekebiliriz.

postgresql linux ubuntu 18 işletim sisteminde yüklemek için (https://www.youtube.com/watch?v=-LwI4HMR_Eg) videyodan yardım alınabilir
