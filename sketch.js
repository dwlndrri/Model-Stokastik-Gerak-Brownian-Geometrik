let bglatar;
let bgkopi;
let logo;
let stokastiknya;
let rumus;
let grafikn1;
let grafikn2;
let sigma1;
let sigma2;
let mu1;
let mu2;
let Anisa;
let Bangjul;
let Dwi;
let Kaktri;
let Mita;
let Okto;
let Ibrani;
let RobotoMonoSemiBold;
let RobotoMonoSemiBoldItalic;
let RobotoMonoMedium;
let RobotoMonoExtraLight;
let RobotoMonoRegular;
let button;
r = 15

function preload() {
    bglatar = loadImage('bglatar.png');
    bgkopi = loadImage('bgkopi.png');
    rumus = loadImage('rumus.png');
    logo = loadImage('logo.png');
    stokastiknya = loadImage('stokastiknya.png');
    grafikn1 = loadImage('grafikn1.png');
    grafikn2 = loadImage('grafikn2.png');
    sigma1 = loadImage('sigma1.png');
    sigma2 = loadImage('sigma2.png');
    mu1 = loadImage('mu1.png');
    mu2 = loadImage('mu2.png');
    Anisa = loadImage('Anisa.png');
    Mita = loadImage('Mita.png');
    Kaktri = loadImage('Kaktri.png');
    Bangjul = loadImage('Bangjul.png');
    Okto = loadImage('Okto.png');
    Dwi = loadImage('Dwi.png');
    Ibrani = loadImage('Ibrani.png');
    RobotoMonoSemiBold = loadFont('RobotoMono-SemiBold.ttf')
    RobotoMonoSemiBoldItalic = loadFont('RobotoMono-SemiBoldItalic.ttf')
    RobotoMonoMedium = loadFont('RobotoMono-Medium.ttf')
    RobotoMonoExtraLight = loadFont('RobotoMono-ExtraLight.ttf')
    RobotoMonoRegular = loadFont('RobotoMono-Regular.ttf')
}

function setup() {
    createCanvas(1300,2900);

    button = createButton(' halaman ini ');
    button.position(240, 2000+43*r);
    button.mousePressed(openLink);

    button.style('background-color', 'red');
    button.style('color', 'white');
    button.style('font-size', '16px');
    button.style('padding', '10px 20px');
    button.style('border', 'none');
    
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background('black');
    fill(51,66,87,200);
    noStroke()

    //latar
    image(bgkopi,0,0,1300,2900);
    fill(51,66,87,200);
    rect(0,0,width,2900);
    image(bglatar,340,28,650,400);
    image(logo,1130,30,140,70);

    //isi1
    textSize(30);
    textFont(RobotoMonoSemiBoldItalic);
    fill("white");
    text("Stokastik",50,380);
    textSize(17);
    textFont(RobotoMonoMedium);
    text("Kejadian stokastik adalah kebolehjadian yang hanya dapat ditentukan",50,410)
    text("distribusi frekuensinya, fungsinya tidak dapat ditentukan dengan pasti",50,420+r)
    text("hanya kisaran fungsi saja. Adapun, model stokastik adalah suatu model",50,430+2*r)
    text("matematika dimana gejala-gejala diukur dengan derajat kepastian yang",50,440+3*r)
    text("tidak stabil. Salah satu contoh model stokastik adalah gerak brownian",50,450+4*r)
    text("geometrik (geometric brownian motion). Gerak brownian geometrik adalah",50,460+5*r)
    text("salah satu variasi dari gerak Brownian yang digunakan untuk memodelkan",50,470+6*r)
    text("pergerakan harga aset keuangan, seperti saham mata uang, atau.",50,480+7*r)
    text("komoditas. Model ini sering digunakan dalam keuangan untuk meramalkan",50,490+8*r)
    text("harga aset di masa depan. Sebagai contoh, kita dapat menggunakan model",50,500+9*r)
    text("stokastik gerak brownian geometrik untuk meramalkan pergerakan harga",50,510+10*r)
    text("komoditas kopi. Model ini dapat memberikan perkiraan tentang bagaimana harga kopi dapat berfluktuasi dari waktu ke",50,520+11*r)
    text("waktu. Akan tetapi contoh ini adalah contoh sederhana yang tidak mencakup semua faktor yang mempengaruhi harga kopi",50,530+12*r)
    text("dalam kehidupan nyata. Namun,dapat disimpulkan model stokastik gerak Brownian geometrik dapat memberikan gambaran",50,540+13*r)
    text("tentang pergerakan harga kopi.",50,550+14*r)
    image(stokastiknya,780,390,460,260);

    //isi2
    textSize(20);
    textFont(RobotoMonoSemiBoldItalic);
    fill("white");
    text("Persamaan Diferensial Stokastik Geometrik",50,580+15*r);
    image(rumus,50,580+16*r,500,100);
    textSize(17);
    textFont(RobotoMonoMedium);
    text("Keterangan:  Y(t) = Nilai pada waktu tertentu t ",590,600+16*r);
    text("B(t) = Proses wiener", 723,605+17*r);
    text("μ = Nilai drift", 723,610+18*r);
    text("σ = Nilai volatilitas", 723,615+19*r);
    text("Persamaan diferensial stokastik ini menggambarkan hubungan antara perubahan harga, drift, volatilitas, dan gerak", 50, 650+20*r)
    text("Brownian. Drift (μ) menunjukkan tren atau kecenderungan rata-rata perubahan harga aset, sedangkan volatilitas (σ)", 50, 660+21*r)
    text("mengukur fluktuasi harga. Solusi dari persamaan diferensial stokastik geometrik memberikan perkiraan tentang", 50, 670+22*r)
    text("bagaimana harga tersebut akan berfluktuasi dari waktu ke waktu, berdasarkan drift dan volatilitas yang diberikan.", 50, 680+23*r)

    //isi3
    textSize(20);
    textFont(RobotoMonoSemiBoldItalic);
    fill("white");
    text("Interpretasi Grafik",50,710+24*r);
    textSize(17);
    textFont(RobotoMonoMedium);
    text("Dalam hal ini yang akan kami simulasikan adalah jalur sampel. Jalur sampel berbeda karena realisasi yang berbeda", 50, 725+25*r)
    text("dari gerak brown. Pertama, menentukan interval waktu T dalam N potongan dan menghitung nilai Y di setiap titik t.", 50, 735+26*r)
    text("Dengan asumsi tn−tn−1=Δt dan untuk menghitung nilai kenaikan dari B dimana ΔB(tn)=B(tn)−B(tn−1).", 50, 745+27*r)
    image(grafikn1,200,755+28*r,400,310);
    image(grafikn2,680,755+28*r,400,310);
    textSize(15);
    textFont(RobotoMonoMedium);
    text("(a)",385,1505)
    text("(b)",880,1505)
    textSize(17);
    textFont(RobotoMonoMedium);
    text("Dari gambar diatas (a) dan (b) kita dapat melihat bentuk simulasi jalur sampel dari gerak brownian serta dapat ", 50, 1140+27*r)
    text("dilihat pula bentuk grafik hubungan antara Y(t) yakni fungsi stokastik terhadap waktu. Dari simulasi ini juga", 50, 1150+28*r)
    text("nantinya terlihat bahwa nilai rata-rata dari Y(t) dan sebarannya semakin meningkat. Pada jalur sampel grafik", 50, 1160+29*r)
    text("terlihat bahwa saat tertentu mencapai nilai maksimal sedangkan saat yang lain mencapai nilai minimal.", 50, 1170+30*r)

    image(sigma1,200,1180+31*r,400,310);
    image(sigma2,680,1180+31*r,400,310);
    textSize(15);
    textFont(RobotoMonoMedium);
    text("(a)",385,1975)
    text("(b)",880,1975)
    textSize(17);
    textFont(RobotoMonoMedium);
    text("Dari kedua gambar diatas (a) dan (b) terlihat bahwa ketika nilai volatilitas (σ) meningkat dan nilai drift (μ)", 50, 1520+33*r)
    text("tetap maka patahan sampel atau kenaikan dan penurunannya semakin tajam.", 50, 1530+34*r)

    image(mu1,200,1555+34*r,400,310);
    image(mu2,680,1555+34*r,400,310);
    textSize(15);
    textFont(RobotoMonoMedium);
    text("(a)",385,2395)
    text("(b)",880,2395)
    textSize(17);
    textFont(RobotoMonoMedium);
    text("Dari kedua gambar diatas (a) dan (b) terlihat bahwa Ketika nilai drift (μ) meningkat dan volatilitas (σ)", 50, 1910+35*r)
    text("tetap maka perubahan harga Y(t) semakin meningkat.", 50, 1920+36*r)

    //isi4
    textSize(20);
    textFont(RobotoMonoSemiBoldItalic);
    fill("white");
    text("Kesimpulan",50,1963+36*r);
    textSize(17);
    textFont(RobotoMonoMedium);
    text("Berdasarkan penjelasan diatas, maka didapatkan kesimpulan:", 50, 1975+37*r)
    text("- Jalur sampel dari gerak brown berbeda di seluruh jalur sampelnya ", 50, 1985+38*r)
    text("- Banyaknya jalur sampel semakin baik untuk memperkirakan parameter sebenarnya dari sistem", 50, 1995+39*r)

    //isi5
    textSize(17);
    textFont(RobotoMonoMedium);
    text("Silahkan kunjungi ", 50, 2000+44*r)
    text("untuk mengetahui lebih lanjut terkait code python Model Stokastik Geometric", 370, 2000+44*r)
    text("Brownian Motion ", 50, 2010+45*r)

    //isi6
    textSize(17);
    textFont(RobotoMonoExtraLight);
    text("Made By: ", 50, 2040+47*r)
    image(Bangjul,100,2050+47*r,100,100);
    image(Kaktri,265,2050+47*r,100,100);
    image(Anisa,430,2050+47*r,100,100);
    image(Dwi,595,2050+47*r,100,100);
    image(Mita,760,2050+47*r,100,100);
    image(Okto,925,2050+47*r,100,100);
    image(Ibrani,1090,2050+47*r,100,100);
    textSize(10);
    text("JULIANT GALIH.A", 100, 2150+48*r)
    text("TRINOVA AGNESIA ", 270, 2150+48*r)
    text("ANISA FITRIANI ", 440, 2150+48*r)
    text("DWI WULANDARI ", 607, 2150+48*r)
    text("MITA PUSPITA.S ", 767, 2150+48*r)
    text("OKTO BRYAN.S", 935, 2150+48*r)
    text("IBRANI S.MELIALA ", 1093, 2150+48*r)
    text("118160080", 115, 2150+49*r)
    text("119160110 ", 283, 2150+49*r)
    text("121160035 ", 452, 2150+49*r)
    text("121160080", 617, 2150+49*r)
    text("121160086", 777, 2150+49*r)
    text("121160100", 945, 2150+49*r)
    text("121160106", 1105, 2150+49*r)

}

function openLink() {
    let link = 'https://colab.research.google.com/drive/1h7HMTfAThIik1A0V0nedj3H991vdla4n?usp=sharing';  // Tautan yang diinginkan
    window.open(link, '_blank');
}
