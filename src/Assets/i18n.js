import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    // English
    en: {
      translation: {
        // Home
          Home: "Home",
          FAQ: "FAQ",
          Download: "Download",
          hero_bannerH1: "The Best Player and Downloader for Video and Music",
          hero_bannerH3: "Free, High Quality and Safe",
          download_btn: "Official Download",
        // features_section
          features_title: "A Useful Video Downloader",
          High_Definition: "High Definition",
          MP3_Converter: "MP3 Converter",
          Fast_Download: "Fast Download",
          Music_Video_Player: "Music/Video Player",
          Offline_Share: "Offline Share",
        // introduce_section
          // 1
            Multiple_Sites_Supported:"Multiple Sites Supported",
            Feel_free_to:"Feel free to discover more of the available sites and download your favourite videos!",
            You_can_find:"You can find out videos, pictures and songs from different multimedia platforms directly in one VidMate without switching out to others. You can also download them to your Android phone as much as you like without having to worry about the cost. Because whether you browse online or download, it's all completely free!",
          // 2
            Status_and_Picture_Saver:"Status and Picture Saver",
            Save_videos_pics:"Save videos/pics on WhatsApp Status, Instagram etc. before deleted!",
            When_you_see_a:"When you see a funny Whatsapp Status or a nice Instagram photo, do you ever worry that they will be deleted one day? Now, you can easily use VidMate to keep the statuses and photos from social media permanently on your Android phone! Besides, there is a photo channel with a collection of many types of images on the homepage of VidMate, you can easily find and download high-quality images in it.",
          // 3
            Video_to_Mp3_Converter:"Video to Mp3 Converter",
            Save_videos_as:"Save videos as audio and create your own personal song list!",
            VidMate_is_a_useful:"VidMate is a useful Mp3 Converter for people who like to listen to music on streaming apps. With VidMate you can not only save time from switching among different music players, but also download plenty of albums and songs for free and even save high-quality music videos in mp3 format. With countless audio resources and the high download speed, VidMate will be the best music player and downloader on your Android smartphone.",
          // 4
            Better_Download_Experiences:"Better Download Experiences",
            Download_high_quality:"Download high-quality videos, audios and pictures quickly and efficiently!",
            With_VidMate_you:"With VidMate you can download videos, music and pictures in high quality. You can select different quality options, which include 720P, 1080p HD, 2K, 4K and even 8K.Compared with the old version, the download speed has been greatly improved. Please download or update the latest version of VidMate on experience faster download speed!",
          // 5
            Various_Media_Resources:"Various Media Resources",
            Watch_or_listen:"Watch or listen to thousands of media sources online and download them for free!",
            At_the_top_of:"At the top of the page there is a menu of Category. Verious channels are available including Movie, Music, Image, Status etc. You can also watch Live TV programs and series on VidMate.",
            Thanks_to_the:"Thanks to the effective recommendation system and the in-App-subscribe function you can follow and keep up with what you are interest in at the first time.",
        // sites_supported
          Download_Videos_from_More_Supported_Sites:"Download Videos from More Supported Sites",
        // FAQ section
          // 1
            How_to_get:"How to get VidMate APP on Google Play Store?",
            VidMate_is_not_listed:"VidMate is not listed in Google Play Store due to Google's Policy. VidMate is 100% SAFE. You can download the apk File from our official website AAPDI SITE LINK or other third party platforms such as APKTom, Uptodown and APKPure.",
          // 2
            How_to_install:"How to install the apk file downloaded from Chrome on your Android smartphone?",
            Because_VidMate_is_an_app:"Because VidMate is an app other than Google Play Store, you will receive installation block notice before installing. Please click on “Settings” and switch on “Unknown Sources”. After that you can start installing VidMate.",
          // 3
            Is_VidMate:"Is VidMate available for iOS and PC?",
            VidMate_is_presently:"VidMate is presently not available for iOS and PC. You may need to install Bluestacks if you want to use our app on your computer or laptop.",
        // more
            More: "More >",
        // vote
            vote:"vote",
        // QR Code
            QR_text:"Scan to Download VidMate App",
      },
    },


    // French
    fr: {
      translation: {
        // Home
          Home: "Maison",
          FAQ: "FAQ",
          Download: "Télécharger",
          hero_bannerH1: "Le meilleur lecteur et téléchargeur de vidéo et de musique",
          hero_bannerH3: "Gratuit, de haute qualité et sûr",
          download_btn: "Téléchargement officiel",
        // features_section
          features_title: "Un téléchargeur vidéo utile",
          High_Definition: "Haute définition",
          MP3_Converter: "Convertisseur mp3",
          Fast_Download: "Téléchargement rapide",
          Music_Video_Player: "Lecteur de musique/vidéo",
          Offline_Share: "Partager hors ligne",
        // introduce_section
          // 1
            Multiple_Sites_Supported:"Plusieurs sites pris en charge",
            Feel_free_to:"N'hésitez pas à découvrir davantage de sites disponibles et à télécharger vos vidéos préférées !",
            You_can_find:"Vous pouvez découvrir des vidéos, des images et des chansons de différentes plates-formes multimédia directement dans un VidMate sans passer aux autres. Vous pouvez également les télécharger sur votre téléphone Android autant que vous le souhaitez sans avoir à vous soucier du coût. Parce que que vous naviguiez en ligne ou que vous téléchargiez, tout est entièrement gratuit !",
          // 2
            Status_and_Picture_Saver:"Statut et économiseur d'image",
            Save_videos_pics:"Enregistrez des vidéos/photos sur WhatsApp Status, Instagram, etc. avant de les supprimer !",
            When_you_see_a:"Lorsque vous voyez un statut Whatsapp amusant ou une belle photo Instagram, craignez-vous qu'elles soient supprimées un jour ? Désormais, vous pouvez facilement utiliser VidMate pour conserver en permanence les statuts et les photos des réseaux sociaux sur votre téléphone Android ! En outre, il existe une chaîne de photos avec une collection de nombreux types d'images sur la page d'accueil de VidMate, vous pouvez facilement y trouver et télécharger des images de haute qualité.",
          // 3
            Video_to_Mp3_Converter:"Convertisseur vidéo en Mp3",
            Save_videos_as:"Enregistrez des vidéos sous forme audio et créez votre propre liste de chansons personnelle !",
            VidMate_is_a_useful:"VidMate est un convertisseur Mp3 utile pour les personnes qui aiment écouter de la musique sur des applications de streaming. Avec VidMate, vous pouvez non seulement gagner du temps en passant d'un lecteur de musique à l'autre, mais également télécharger gratuitement de nombreux albums et chansons et même enregistrer des vidéos musicales de haute qualité au format mp3. Avec d'innombrables ressources audio et une vitesse de téléchargement élevée, VidMate sera le meilleur lecteur et téléchargeur de musique sur votre smartphone Android.",
          // 4
            Better_Download_Experiences:"De meilleures expériences de téléchargement",
            Download_high_quality:"Téléchargez des vidéos, des audios et des images de haute qualité rapidement et efficacement !",
            With_VidMate_you:"Avec VidMate, vous pouvez télécharger des vidéos, de la musique et des images en haute qualité. Vous pouvez sélectionner différentes options de qualité, notamment 720P, 1080p HD, 2K, 4K et même 8K. Par rapport à l'ancienne version, la vitesse de téléchargement a été considérablement améliorée. Veuillez télécharger ou mettre à jour la dernière version de VidMate pour bénéficier d'une vitesse de téléchargement plus rapide !",
          // 5
            Various_Media_Resources:"Diverses ressources médiatiques",
            Watch_or_listen:"Regardez ou écoutez des milliers de sources multimédias en ligne et téléchargez-les gratuitement!",
            At_the_top_of:"En haut de la page se trouve un menu de catégorie. Plusieurs chaînes sont disponibles, notamment Film, Musique, Image, Statut, etc. Vous pouvez également regarder des programmes et des séries TV en direct sur VidMate.",
            Thanks_to_the:"Grâce au système de recommandation efficace et à la fonction d'abonnement dans l'application, vous pouvez suivre et suivre ce qui vous intéresse dès la première fois.",
        // sites_supported
          Download_Videos_from_More_Supported_Sites:"Téléchargez des vidéos à partir de sites plus pris en charge",
        // FAQ section
          // 1
            How_to_get:"Comment obtenir l'application VidMate sur Google Play Store ?",
            VidMate_is_not_listed:"VidMate n'est pas répertorié dans Google Play Store en raison de la politique de Google. VidMate est 100 % SÛR. Vous pouvez télécharger le fichier apk depuis notre site officiel AAPDI SITE LINK ou d'autres plateformes tierces telles que APKTom, Uptodown et APKPure.",
          // 2
             How_to_install:"Comment installer le fichier apk téléchargé depuis Chrome sur votre smartphone Android ?",
            Because_VidMate_is_an_app:"Étant donné que VidMate est une application autre que Google Play Store, vous recevrez un avis de blocage d'installation avant l'installation. Veuillez cliquer sur « Paramètres » et activer « Sources inconnues ». Après cela, vous pouvez commencer à installer VidMate.",
          // 3
            Is_VidMate:"VidMate est-il disponible pour iOS et PC ?",
            VidMate_is_presently:"VidMate n'est actuellement pas disponible pour iOS et PC. Vous devrez peut-être installer Bluestacks si vous souhaitez utiliser notre application sur votre ordinateur ou ordinateur portable.",
        // more
          More: "Plus >",
        // vote
          vote:"vote",
        // QR Code
          QR_text:"Numériser pour télécharger l'application VidMate",
      },
    },


    // Spanish
    es: {
      translation: {
        // Home
        Home: "Hogar",
        FAQ: "Preguntas más frecuentes",
        Download: "Descargar",
        hero_bannerH1: "El mejor reproductor y descargador de vídeos y música",
        hero_bannerH3: "Gratis, de alta calidad y seguro",
        download_btn: "Descarga oficial",
        // features_section
        features_title: "Un útil descargador de vídeos",
        High_Definition: "Alta definición",
        MP3_Converter: "Convertidor MP3",
        Fast_Download: "Descarga rápida",
        Music_Video_Player: "Reproductor de música/vídeo",
        Offline_Share: "Compartir sin conexión",
        // introduce_section
          // 1
          Multiple_Sites_Supported:"Múltiples sitios compatibles",
          Feel_free_to:"¡Siéntete libre de descubrir más sitios disponibles y descargar tus videos favoritos!",
          You_can_find:"Puede encontrar vídeos, imágenes y canciones de diferentes plataformas multimedia directamente en un VidMate sin tener que cambiar a otros. También puedes descargarlos en tu teléfono Android tantas veces como quieras sin tener que preocuparte por el coste. Porque ya sea que navegues en línea o descargues, ¡todo es completamente gratis!",
          // 2
          Status_and_Picture_Saver:"Estado y protector de imágenes",
          Save_videos_pics:"¡Guarde videos/fotos en el estado de WhatsApp, Instagram, etc. antes de eliminarlos!",
          When_you_see_a:"Cuando ves un estado divertido de Whatsapp o una bonita foto de Instagram, ¿alguna vez te preocupa que algún día se eliminen? ¡Ahora puedes usar VidMate fácilmente para mantener los estados y las fotos de las redes sociales de forma permanente en tu teléfono Android! Además, hay un canal de fotos con una colección de muchos tipos de imágenes en la página de inicio de VidMate, donde puedes encontrar y descargar fácilmente imágenes de alta calidad.",
          // 3
          Video_to_Mp3_Converter:"Convertidor de vídeo a MP3",
          Save_videos_as:"¡Guarda vídeos como audio y crea tu propia lista de canciones personal!",
          VidMate_is_a_useful:"VidMate es un convertidor de MP3 útil para las personas a las que les gusta escuchar música en aplicaciones de streaming. Con VidMate no sólo puedes ahorrar tiempo al cambiar entre diferentes reproductores de música, sino también descargar muchos álbumes y canciones gratis e incluso guardar vídeos musicales de alta calidad en formato mp3. Con innumerables recursos de audio y alta velocidad de descarga, VidMate será el mejor reproductor y descargador de música en su teléfono inteligente Android.",
          // 4
          Better_Download_Experiences:"Mejores experiencias de descarga",
          Download_high_quality:"¡Descarga videos, audios e imágenes de alta calidad de manera rápida y eficiente!",
          With_VidMate_you:"Con VidMate puedes descargar vídeos, música e imágenes en alta calidad. Puede seleccionar diferentes opciones de calidad, que incluyen 720P, 1080p HD, 2K, 4K e incluso 8K. En comparación con la versión anterior, la velocidad de descarga ha mejorado enormemente. Descargue o actualice la última versión de VidMate para experimentar una velocidad de descarga más rápida.",
          // 5
          Various_Media_Resources:"Varios recursos de medios",
          Watch_or_listen:"¡Mire o escuche miles de fuentes de medios en línea y descárguelas gratis!",
          At_the_top_of:"En la parte superior de la página hay un menú de Categoría. Hay varios canales disponibles, incluidos películas, música, imágenes, estado, etc. También puede ver programas y series de TV en vivo en VidMate.",
          Thanks_to_the:"Gracias al eficaz sistema de recomendación y a la función de suscripción en la aplicación, puedes seguir y mantenerte al día con lo que te interesa desde el primer momento.",
      // sites_supported
        Download_Videos_from_More_Supported_Sites:"Descargar vídeos de más sitios compatibles",
      // FAQ section
        // 1
          How_to_get:"¿Cómo obtener la APLICACIÓN VidMate en Google Play Store?",
          VidMate_is_not_listed:"VidMate no aparece en Google Play Store debido a la política de Google. VidMate es 100% SEGURO. Puede descargar el archivo apk desde nuestro sitio web oficial AAPDI SITE LINK u otras plataformas de terceros como APKTom, Uptodown y APKPure.",
        // 2
          How_to_install:"¿Cómo instalar el archivo apk descargado de Chrome en tu smartphone Android?",
          Because_VidMate_is_an_app:"Debido a que VidMate es una aplicación distinta a Google Play Store, recibirá un aviso de bloqueo de instalación antes de realizar la instalación. Haga clic en 'Configuración' y active 'Fuentes desconocidas'. Después de eso puedes comenzar a instalar VidMate.",
        // 3
          Is_VidMate:"¿VidMate está disponible para iOS y PC?",
          VidMate_is_presently:"VidMate actualmente no está disponible para iOS y PC. Es posible que necesite instalar Bluestacks si desea utilizar nuestra aplicación en su computadora o computadora portátil.",
      // more
        More: "Más >",
      // vote
        vote:"votar",
      // QR Code
        QR_text:"Escanee para descargar la aplicación VidMate",
      },
    },


    // Portuguese
    pt: {
      translation: {
        // Home
        Home: "Lar",
        FAQ: "Perguntas frequentes",
        Download: "Download",
        hero_bannerH1: "O melhor reprodutor e downloader de vídeo e música",
        hero_bannerH3: "Gratuito, de alta qualidade e seguro",
        download_btn: "Download oficial",
        // features_section
        features_title: "Um downloader de vídeo útil",
        High_Definition: "Alta definição",
        MP3_Converter: "Conversor de mp3",
        Fast_Download: "Download rápido",
        Music_Video_Player: "Reprodutor de música/vídeo",
        Offline_Share: "Compartilhamento off-line",
        // introduce_section
          // 1
          Multiple_Sites_Supported:"Vários sites suportados",
          Feel_free_to:"Fique à vontade para descobrir mais sites disponíveis e baixar seus vídeos favoritos!",
          You_can_find:"Você pode encontrar vídeos, fotos e músicas de diferentes plataformas multimídia diretamente em um VidMate, sem precisar mudar para outros. Você também pode baixá-los para o seu telefone Android quantas vezes quiser, sem se preocupar com o custo. Porque quer você navegue on-line ou faça download, é tudo totalmente gratuito!",
          // 2
          Status_and_Picture_Saver:"Economia de status e imagem",
          Save_videos_pics:"Salve vídeos/fotos no WhatsApp Status, Instagram etc. antes de excluí-los!",
          When_you_see_a:"Quando você vê um status engraçado do Whatsapp ou uma bela foto do Instagram, você já se preocupou com a possibilidade de eles serem excluídos um dia? Agora você pode usar facilmente o VidMate para manter os status e fotos das redes sociais permanentemente no seu telefone Android! Além disso, existe um canal de fotos com uma coleção de diversos tipos de imagens na página inicial do VidMate, nele você pode facilmente encontrar e baixar imagens de alta qualidade.",
          // 3
          Video_to_Mp3_Converter:"Conversor de vídeo para MP3",
          Save_videos_as:"Salve vídeos como áudio e crie sua própria lista de músicas pessoal!",
          VidMate_is_a_useful:"VidMate é um conversor de MP3 útil para pessoas que gostam de ouvir música em aplicativos de streaming. Com o VidMate você não só pode economizar tempo alternando entre diferentes reprodutores de música, mas também baixar muitos álbuns e músicas gratuitamente e até salvar vídeos musicais de alta qualidade em formato mp3. Com inúmeros recursos de áudio e alta velocidade de download, o VidMate será o melhor reprodutor e downloader de música para o seu smartphone Android.",
          // 4
          Better_Download_Experiences:"Melhores experiências de download",
          Download_high_quality:"Baixe vídeos, áudios e fotos de alta qualidade com rapidez e eficiência!",
          With_VidMate_you:"Com VidMate você pode baixar vídeos, músicas e fotos em alta qualidade. Você pode selecionar diferentes opções de qualidade, que incluem 720P, 1080p HD, 2K, 4K e até 8K.Em comparação com a versão antiga, a velocidade de download foi bastante melhorada. Baixe ou atualize a versão mais recente do VidMate para obter uma velocidade de download mais rápida!",
          // 5
          Various_Media_Resources:"Vários recursos de mídia",
          Watch_or_listen:"Assista ou ouça milhares de fontes de mídia online e baixe-as gratuitamente!",
          At_the_top_of:"No topo da página há um menu de Categoria. Vários canais estão disponíveis, incluindo filmes, músicas, imagens, status, etc. Você também pode assistir a programas e séries de TV ao vivo no VidMate.",
          Thanks_to_the:"Graças ao sistema de recomendação eficaz e à função de assinatura no aplicativo, você pode acompanhar e acompanhar o que lhe interessa na primeira vez.",
      // sites_supported
        Download_Videos_from_More_Supported_Sites:"Baixe vídeos de sites mais suportados",
      // FAQ section
        // 1
          How_to_get:"Como obter o APP VidMate na Google Play Store?",
          VidMate_is_not_listed:"VidMate não está listado na Google Play Store devido à política do Google. VidMate é 100% SEGURO. Você pode baixar o arquivo apk em nosso site oficial AAPDI SITE LINK ou outras plataformas de terceiros, como APKTom, Uptodown e APKPure.",
        // 2
          How_to_install:"Como instalar o arquivo apk baixado do Chrome em seu smartphone Android?",
          Because_VidMate_is_an_app:"Como o VidMate é um aplicativo diferente da Google Play Store, você receberá um aviso de bloqueio de instalação antes de instalar. Clique em “Configurações” e ative “Fontes desconhecidas”. Depois disso, você pode começar a instalar o VidMate.",
        // 3
          Is_VidMate:"O VidMate está disponível para iOS e PC?",
          VidMate_is_presently:"Atualmente, o VidMate não está disponível para iOS e PC. Pode ser necessário instalar Bluestacks se quiser usar nosso aplicativo em seu computador ou laptop.",
      // more
        More: "Mais >",
      // vote
        vote:"voto",
      // QR Code
        QR_text:"Digitalize para baixar o aplicativo VidMate",
      },
    },


    // Hindi
    hi: {
      translation: {
        // Home
        Home: "घर",
        FAQ: "सामान्य प्रश्न",
        Download: "डाउनलोड करना",
        hero_bannerH1: "वीडियो और संगीत के लिए सर्वश्रेष्ठ प्लेयर और डाउनलोडर",
        hero_bannerH3: "मुफ़्त, उच्च गुणवत्ता और सुरक्षित",
        download_btn: "आधिकारिक डाउनलोड",
        // features_section
        features_title: "एक उपयोगी वीडियो डाउनलोडर",
        High_Definition: "हाई डेफिनेशन",
        MP3_Converter: "एमपी 3 परिवर्तक",
        Fast_Download: "फास्ट डाउनलोड",
        Music_Video_Player: "संगीत/वीडियो प्लेयर",
        Offline_Share: "ऑफ़लाइन शेयर",
        // introduce_section
          // 1
          Multiple_Sites_Supported:"एकाधिक साइटें समर्थित",
          Feel_free_to:"अधिक उपलब्ध साइटों की खोज करने और अपने पसंदीदा वीडियो डाउनलोड करने के लिए स्वतंत्र महसूस करें!",
          You_can_find:"आप विभिन्न मल्टीमीडिया प्लेटफार्मों से वीडियो, चित्र और गाने सीधे एक VidMate में पा सकते हैं, बिना दूसरे पर स्विच किए। आप लागत की चिंता किए बिना इन्हें अपने एंड्रॉइड फोन पर जितना चाहें उतना डाउनलोड कर सकते हैं। क्योंकि चाहे आप ऑनलाइन ब्राउज़ करें या डाउनलोड करें, यह सब पूरी तरह से मुफ़्त है!",
          // 2
          Status_and_Picture_Saver:"स्थिति और चित्र सेवर",
          Save_videos_pics:"डिलीट होने से पहले व्हाट्सएप स्टेटस, इंस्टाग्राम आदि पर वीडियो/तस्वीरें सेव करें!",
          When_you_see_a:"जब आप कोई मज़ेदार व्हाट्सएप स्टेटस या कोई अच्छी इंस्टाग्राम फोटो देखते हैं, तो क्या आपको कभी चिंता होती है कि उन्हें एक दिन हटा दिया जाएगा? अब, आप सोशल मीडिया से स्टेटस और फ़ोटो को अपने एंड्रॉइड फोन पर स्थायी रूप से रखने के लिए आसानी से VidMate का उपयोग कर सकते हैं! इसके अलावा, VidMate के होमपेज पर कई प्रकार की छवियों के संग्रह के साथ एक फोटो चैनल है, आप इसमें उच्च गुणवत्ता वाली छवियां आसानी से ढूंढ और डाउनलोड कर सकते हैं।",
          // 3
          Video_to_Mp3_Converter:"वीडियो से एमपी3 कन्वर्टर",
          Save_videos_as:"वीडियो को ऑडियो के रूप में सहेजें और अपनी निजी गीत सूची बनाएं!",
          VidMate_is_a_useful:"VidMate उन लोगों के लिए एक उपयोगी Mp3 कन्वर्टर है जो स्ट्रीमिंग ऐप्स पर संगीत सुनना पसंद करते हैं। VidMate के साथ आप न केवल अलग-अलग म्यूजिक प्लेयर्स के बीच स्विच करने से समय बचा सकते हैं, बल्कि ढेर सारे एल्बम और गाने मुफ्त में डाउनलोड कर सकते हैं और यहां तक ​​कि एमपी3 फॉर्मेट में उच्च गुणवत्ता वाले म्यूजिक वीडियो भी सेव कर सकते हैं। अनगिनत ऑडियो संसाधनों और उच्च डाउनलोड गति के साथ, VidMate आपके एंड्रॉइड स्मार्टफोन पर सबसे अच्छा म्यूजिक प्लेयर और डाउनलोडर होगा।",
          // 4
          Better_Download_Experiences:"बेहतर डाउनलोड अनुभव",
          Download_high_quality:"उच्च गुणवत्ता वाले वीडियो, ऑडियो और चित्र जल्दी और कुशलता से डाउनलोड करें!",
          With_VidMate_you:"VidMate से आप उच्च गुणवत्ता में वीडियो, संगीत और चित्र डाउनलोड कर सकते हैं। आप विभिन्न गुणवत्ता विकल्प चुन सकते हैं, जिसमें 720P, 1080p HD, 2K, 4K और यहां तक ​​कि 8K भी शामिल है। पुराने संस्करण की तुलना में, डाउनलोड गति में काफी सुधार हुआ है। कृपया तेज डाउनलोड गति के अनुभव पर VidMate का नवीनतम संस्करण डाउनलोड या अपडेट करें!",
          // 5
          Various_Media_Resources:"विभिन्न मीडिया संसाधन",
          Watch_or_listen:"हजारों मीडिया स्रोतों को ऑनलाइन देखें या सुनें और उन्हें निःशुल्क डाउनलोड करें!",
          At_the_top_of:"पृष्ठ के शीर्ष पर श्रेणी का एक मेनू है. मूवी, संगीत, छवि, स्टेटस आदि सहित कई चैनल उपलब्ध हैं। आप VidMate पर लाइव टीवी कार्यक्रम और श्रृंखला भी देख सकते हैं।",
          Thanks_to_the:"प्रभावी अनुशंसा प्रणाली और इन-ऐप-सब्सक्राइब फ़ंक्शन के लिए धन्यवाद, आप पहली बार में जिस चीज़ में रुचि रखते हैं उसका अनुसरण कर सकते हैं और उससे जुड़ सकते हैं।",
      // sites_supported
        Download_Videos_from_More_Supported_Sites:"अधिक समर्थित साइटों से वीडियो डाउनलोड करें",
      // FAQ section
        // 1
          How_to_get:"Google Play Store पर VidMate APP कैसे प्राप्त करें?",
          VidMate_is_not_listed:"Google की नीति के कारण VidMate Google Play Store में सूचीबद्ध नहीं है। VidMate 100% सुरक्षित है। आप एपीके फ़ाइल को हमारी आधिकारिक वेबसाइट AAPDI SITE LINK या अन्य तृतीय पक्ष प्लेटफ़ॉर्म जैसे एपीकेटॉम, अपटूडाउन और एपीकेप्योर से डाउनलोड कर सकते हैं।",
        // 2
          How_to_install:"Chrome से डाउनलोड की गई एपीके फ़ाइल को अपने एंड्रॉइड स्मार्टफोन पर कैसे इंस्टॉल करें?",
          Because_VidMate_is_an_app:"क्योंकि VidMate Google Play Store के अलावा एक ऐप है, आपको इंस्टॉल करने से पहले इंस्टॉलेशन ब्लॉक नोटिस प्राप्त होगा। कृपया 'सेटिंग्स' पर क्लिक करें और 'अज्ञात स्रोत' पर स्विच करें। उसके बाद आप VidMate इंस्टॉल करना शुरू कर सकते हैं।",
        // 3
          Is_VidMate:"क्या VidMate iOS और PC के लिए उपलब्ध है?",
          VidMate_is_presently:"VidMate फिलहाल iOS और PC के लिए उपलब्ध नहीं है। यदि आप अपने कंप्यूटर या लैपटॉप पर हमारे ऐप का उपयोग करना चाहते हैं तो आपको ब्लूस्टैक्स इंस्टॉल करने की आवश्यकता हो सकती है।",
      // more
        More: "अधिक >",
      // vote
        vote:"वोट",
      // QR Code
        QR_text:"VidMate ऐप डाउनलोड करने के लिए स्कैन करें",
      },
    },


    // Arabic
    ar: {
      translation: {
        // Home
        Home: "بيت",
        FAQ: "التعليمات",
        Download: "تحميل",
        hero_bannerH1: "أفضل مشغل وتنزيل للفيديو والموسيقى",
        hero_bannerH3: "مجاني وعالي الجودة وآمن",
        download_btn: "التحميل الرسمي",
        // features_section
        features_title: "تنزيل فيديو مفيد",
        High_Definition: "عالي الدقة",
        MP3_Converter: "محول ام بي 3",
        Fast_Download: "تحميل سريع",
        Music_Video_Player: "مشغل موسيقى/فيديو",
        Offline_Share: "مشاركة دون اتصال",
        // introduce_section
          // 1
          Multiple_Sites_Supported:"مواقع متعددة معتمدة",
          Feel_free_to:"لا تتردد في اكتشاف المزيد من المواقع المتاحة وتنزيل مقاطع الفيديو المفضلة لديك!",
          You_can_find:"يمكنك العثور على مقاطع الفيديو والصور والأغاني من منصات الوسائط المتعددة المختلفة مباشرةً في VidMate واحد دون التبديل إلى منصات أخرى. يمكنك أيضًا تنزيلها على هاتف Android الخاص بك بقدر ما تريد دون الحاجة إلى القلق بشأن التكلفة. لأنه سواء كنت تتصفح عبر الإنترنت أو تقوم بالتنزيل، فكل شيء مجاني تمامًا!",
          // 2
          Status_and_Picture_Saver:"الحالة وحفظ الصورة",
          Save_videos_pics:"احفظ مقاطع الفيديو/الصور على حالة WhatsApp وInstagram وما إلى ذلك قبل حذفها!",
          When_you_see_a:"عندما ترى حالة Whatsapp مضحكة أو صورة جميلة على Instagram، هل تقلق يومًا من حذفها يومًا ما؟ الآن، يمكنك بسهولة استخدام VidMate للاحتفاظ بالحالات والصور من وسائل التواصل الاجتماعي بشكل دائم على هاتف Android الخاص بك! علاوة على ذلك، توجد قناة صور تحتوي على مجموعة من أنواع الصور المتعددة على الصفحة الرئيسية لبرنامج VidMate، حيث يمكنك بسهولة العثور على صور عالية الجودة وتنزيلها فيها.",
          // 3
          Video_to_Mp3_Converter:"فيديو لتحويل MP3",
          Save_videos_as:"احفظ مقاطع الفيديو كصوت وأنشئ قائمة الأغاني الشخصية الخاصة بك!",
          VidMate_is_a_useful:"VidMate هو محول Mp3 مفيد للأشخاص الذين يحبون الاستماع إلى الموسيقى على تطبيقات البث. باستخدام VidMate، لا يمكنك فقط توفير الوقت من التبديل بين مشغلات الموسيقى المختلفة، بل يمكنك أيضًا تنزيل الكثير من الألبومات والأغاني مجانًا وحتى حفظ مقاطع الفيديو الموسيقية عالية الجودة بتنسيق mp3. مع عدد لا يحصى من الموارد الصوتية وسرعة التنزيل العالية، سيكون VidMate أفضل مشغل موسيقى وتنزيل على هاتفك الذكي الذي يعمل بنظام Android.",
          // 4
          Better_Download_Experiences:"تجارب تنزيل أفضل",
          Download_high_quality:"قم بتنزيل مقاطع الفيديو والتسجيلات الصوتية والصور عالية الجودة بسرعة وكفاءة!",
          With_VidMate_you:"مع VidMate يمكنك تنزيل مقاطع الفيديو والموسيقى والصور بجودة عالية. يمكنك تحديد خيارات جودة مختلفة، والتي تشمل 720P و1080p HD و2K و4K وحتى 8K. وبالمقارنة مع الإصدار القديم، تم تحسين سرعة التنزيل بشكل كبير. يرجى تنزيل أو تحديث أحدث إصدار من VidMate لتجربة سرعة تنزيل أسرع!",
          // 5
          Various_Media_Resources:"موارد إعلامية مختلفة",
          Watch_or_listen:"شاهد أو استمع إلى آلاف المصادر الإعلامية عبر الإنترنت وقم بتنزيلها مجانًا!",
          At_the_top_of:"في أعلى الصفحة توجد قائمة بالفئة. تتوفر قنوات حقيقية بما في ذلك الأفلام والموسيقى والصور والحالة وما إلى ذلك. يمكنك أيضًا مشاهدة البرامج والمسلسلات التلفزيونية المباشرة على VidMate.",
          Thanks_to_the:"بفضل نظام التوصيات الفعال ووظيفة الاشتراك داخل التطبيق، يمكنك متابعة ومواكبة ما يهمك في المرة الأولى.",
      // sites_supported
        Download_Videos_from_More_Supported_Sites:"قم بتنزيل مقاطع الفيديو من المزيد من المواقع المدعومة",
      // FAQ section
        // 1
          How_to_get:"كيفية الحصول على تطبيق VidMate على متجر Google Play؟",
          VidMate_is_not_listed:"VidMate غير مدرج في متجر Google Play بسبب سياسة Google. VidMate آمن بنسبة 100%. يمكنك تنزيل ملف APK من موقعنا الرسمي AAPDI SITE LINK أو منصات أخرى مثل APKTom وUptodown و APKPure.",
        // 2
          How_to_install:"كيفية تثبيت ملف APK الذي تم تنزيله من Chrome على هاتفك الذكي الذي يعمل بنظام Android؟",
          Because_VidMate_is_an_app:"نظرًا لأن VidMate هو تطبيق آخر غير متجر Google Play، فسوف تتلقى إشعارًا بحظر التثبيت قبل التثبيت. الرجاء النقر فوق الإعدادات وتشغيل مصادر غير معروفة. بعد ذلك يمكنك البدء في تثبيت VidMate.",
        // 3
          Is_VidMate:"هل VidMate متاح لنظام iOS والكمبيوتر الشخصي؟",
          VidMate_is_presently:"VidMate غير متوفر حاليًا لنظامي التشغيل iOS والكمبيوتر الشخصي. قد تحتاج إلى تثبيت Bluestacks إذا كنت تريد استخدام تطبيقنا على جهاز الكمبيوتر أو الكمبيوتر المحمول الخاص بك.",
      // more
        More: "أكثر >",
      // vote
        vote:"تصويت",
      // QR Code
        QR_text:"قم بالمسح لتنزيل تطبيق VidMate",
      },
    },
    
    
    // Chinese
    zh: {
      translation: {
        // Home
        Home: "家",
        FAQ: "常问问题",
        Download: "下载",
        hero_bannerH1: "最佳视频和音乐播放器和下载器",
        hero_bannerH3: "免费、优质、安全",
        download_btn: "官方下载",
        features_title: "一个有用的视频下载器",
        // features_section
        High_Definition: "高清",
        MP3_Converter: "MP3转换器",
        Fast_Download: "快速下载",
        Music_Video_Player: "音乐/视频播放器",
        Offline_Share: "离线分享",
        // introduce_section
          // 1
          Multiple_Sites_Supported:"支持多个站点",
          Feel_free_to:"请随意发现更多可用网站并下载您最喜欢的视频！",
          You_can_find:"您可以直接在一个VidMate中找到来自不同多媒体平台的视频、图片和歌曲，而无需切换到其他平台。您还可以根据需要将它们下载到您的 Android 手机上，而无需担心费用。因为无论您在线浏览还是下载，都是完全免费的！",
          // 2
          Status_and_Picture_Saver:"状态和图片保存程序",
          Save_videos_pics:"在删除之前将视频/图片保存在 WhatsApp Status、Instagram 等上！",
          When_you_see_a:"当您看到有趣的 Whatsapp 状态或漂亮的 Instagram 照片时，您是否担心它们有一天会被删除？现在，您可以轻松地使用 VidMate 将社交媒体中的状态和照片永久保留在您的 Android 手机上！此外，VidMate主页上还有一个图片频道，集合了多种类型的图片，您可以在其中轻松找到并下载高质量的图片。",
          // 3
          Video_to_Mp3_Converter:"视频到 Mp3 转换器",
          Save_videos_as:"将视频另存为音频并创建您自己的个人歌曲列表！",
          VidMate_is_a_useful:"VidMate 是一款有用的 Mp3 转换器，适合喜欢在流媒体应用程序上听音乐的人。使用VidMate，您不仅可以节省在不同音乐播放器之间切换的时间，还可以免费下载大量专辑和歌曲，甚至可以将高质量的音乐视频保存为mp3格式。拥有无数的音频资源和高下载速度，VidMate将成为Android智能手机上最好的音乐播放器和下载器。",
          // 4
          Better_Download_Experiences:"更好的下载体验",
          Download_high_quality:"快速高效下载高质量视频、音频和图片！",
          With_VidMate_you:"使用 VidMate，您可以下载高品质的视频、音乐和图片。您可以选择不同的质量选项，包括720P、1080p高清、2K、4K甚至8K。与旧版本相比，下载速度有了很大的提高。请下载或更新最新版本的VidMate，体验更快的下载速度！",
          // 5
          Various_Media_Resources:"各类媒体资源",
          Watch_or_listen:"在线观看或收听数以千计的媒体资源并免费下载！",
          At_the_top_of:"页面顶部有一个类别菜单。提供各种频道，包括电影、音乐、图像、状态等。您还可以在 VidMate 上观看直播电视节目和连续剧。",
          Thanks_to_the:"借助有效的推荐系统和应用内订阅功能，您可以第一时间关注并了解您感兴趣的内容。",
      // sites_supported
        Download_Videos_from_More_Supported_Sites:"从更多支持的网站下载视频",
      // FAQ section
        // 1
          How_to_get:"如何在 Google Play 商店获取 VidMate APP？",
          VidMate_is_not_listed:"由于 Google 的政策，VidMate 未在 Google Play 商店中列出。 VidMate 100% 安全。您可以从我们的官方网站 AAPDI SITE LINK 或其他第三方平台（例如 APKTom、Uptodown 和 APKPure）下载 apk 文件。",
        // 2
          How_to_install:"如何在 Android 智能手机上安装从 Chrome 下载的 apk 文件？",
          Because_VidMate_is_an_app:"由于 VidMate 是 Google Play 商店以外的应用程序，因此您在安装之前将收到安装阻止通知。请点击“设置”并打开“未知来源”。之后您就可以开始安装 VidMate。",
        // 3
          Is_VidMate:"VidMate 适用于 iOS 和 PC 吗？",
          VidMate_is_presently:"VidMate 目前不适用于 iOS 和 PC。如果您想在计算机或笔记本电脑上使用我们的应用程序，您可能需要安装 Bluestacks。",
      // more
        More: "更多的 >",
      // vote
        vote:"投票",
      // QR Code
        QR_text:"扫描下载VidMate App",
      },
    },
  },
});

export default i18n;
