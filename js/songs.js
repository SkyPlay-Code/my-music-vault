// --- js/songs.js ---
// Define your playlists here.
// Each key in the 'playlists' object is a unique identifier for a song list.
// The value is an array of song objects, just like before.

const playlists = {

    // Playlist for the original password
    skymusic: [
        {
            title: "Echoes in the Quiet",
            artist: "SkyMusic",
            file: "audio/Echoes in the Quiet (Remastered).mp3",
            cover: "images/Echoes in the Quiet.png",
            lyrics: "lyrics/Echoes in the Quiet.txt"
        },
        {
            title: "Under the Night Sky",
            artist: "SkyMusic",
            file: "audio/Under the Night Sky (Remastered).mp3",
            cover: "images/Under the Night Sky.png",
            // lyrics: "lyrics/Under the Night Sky.txt"
        },
        {
            title: "My Forever Glow",
            artist: "SkyMusic",
            file: "audio/My Forever Glow (Remastered).mp3",
            cover: "images/My Forever Glow.png",
            // lyrics: "lyrics/My Forever Glow.txt"
        },
        {
            title: "Under the Night Sky (Reprise)",
            artist: "SkyMusic",
            file: "audio/Under the Night Sky (Remastered-2).mp3",
            cover: "images/Under the Night Sky (Reprise).png",
            // lyrics: "lyrics/Under the Night Sky (Reprise).txt"
        },
        {
            title: "Forever Glow - Short",
            artist: "SkyMusic",
            file: "audio/Forever Glow-Short.mp3",
            cover: "images/Forever Glow-Short.png",
            // lyrics: "lyrics/Forever Glow - Short.txt"
        }
    ],

    // A NEW, second playlist for a different password
    lemon: [
        {
            title: "Lemon (Hindi Version)",
            artist: "SkyMusic",
            file: "audio/Lemon (Hindi Version).mp3", // <-- MAKE SURE YOU HAVE THIS FILE
            cover: "images/Lemon (Hindi Version).png",  // <-- AND THIS COVER
            lyrics: `
                (Verse 1)
                Kaash ye sab ek sapna hota, toh kitna achha hota
                Aaj bhi tum mere khwaabon mein chale aate ho
                Jaise bhooli hui koi cheez lene, laut aate ho
                Aur purani yaadon se dhool hataate ho
                
                (Pre-Chorus)
                Uss din ka woh gham bhi, uss din ki woh takleef bhi
                Teri har ek cheez se ishq tha, jab tum saath the
                Dil mein aaj bhi thehri hai, ek neembu ki kadvi si khushboo
                Jab tak ye dard ki baarish thamm na jaaye, main ghar laut nahi sakta
                Aaj bhi tum hi meri roshni ho
                
                (Chorus)
                Andheron mein, maine tumhari parchhaai ko mehsoos kiya hai
                Har lakeer, har nishaan, mujhe saaf saaf yaad hai
                Jab bhi koi naya gham milta hai, jise seh nahi paata
                Toh bas ye aansu hain, jo behte rehte hain
                Kya kar raha tha main? Kya soch raha tha main?
                Sab kuch tere jaane se dhundhla sa gaya hai
                
                (Verse 2)
                Kahin aisa toh nahi, ki tum bhi meri tarah
                Akelepan mein doobe, aansu baha rahe ho?
                Agar aisa hai, toh bhool jaana mujhe… meri iltijaa hai
                Main bas yahi dua karta hoon, dil se tumhare liye
                Ki tum hamesha khush raho
                
                (Bridge)
                Maine tumse dil se mohabbat ki thi
                Yeh ehsaas aaj bhi utna hi gehra hai
                Jaise kate hue phal ka, main ek adhoora hissa hoon
                Aaj bhi, tum hi meri roshni ho
                
                (Chorus)
                Andheron mein, maine tumhari parchhaai ko mehsoos kiya hai
                Har lakeer, har nishaan, mujhe saaf saaf yaad hai
                Jab bhi koi naya gham milta hai, jise seh nahi paata
                Toh bas ye aansu hain, jo behte rehte hain
                Kya kar raha tha main? Kya soch raha tha main?
                Sab kuch tere jaane se dhundhla sa gaya hai
                
                (Outro)
                Jaise kate hue phal ka, main ek adhoora hissa hoon…
                Aaj bhi… tum hi meri roshni ho.
                `
        },
        {
            title: "Lemon (Hindi Version) -2",
            artist: "SkyMusic",
            file: "audio/Lemon (Hindi Version)2.mp3",  // <-- MAKE SURE YOU HAVE THIS FILE
            cover: "images/Lemon (Hindi Version) -2.png",   // <-- AND THIS COVER
            lyrics: `
                (Verse 1)
                Kaash ye sab ek sapna hota, toh kitna achha hota
                Aaj bhi tum mere khwaabon mein chale aate ho
                Jaise bhooli hui koi cheez lene, laut aate ho
                Aur purani yaadon se dhool hataate ho
                
                (Pre-Chorus)
                Uss din ka woh gham bhi, uss din ki woh takleef bhi
                Teri har ek cheez se ishq tha, jab tum saath the
                Dil mein aaj bhi thehri hai, ek neembu ki kadvi si khushboo
                Jab tak ye dard ki baarish thamm na jaaye, main ghar laut nahi sakta
                Aaj bhi tum hi meri roshni ho
                
                (Chorus)
                Andheron mein, maine tumhari parchhaai ko mehsoos kiya hai
                Har lakeer, har nishaan, mujhe saaf saaf yaad hai
                Jab bhi koi naya gham milta hai, jise seh nahi paata
                Toh bas ye aansu hain, jo behte rehte hain
                Kya kar raha tha main? Kya soch raha tha main?
                Sab kuch tere jaane se dhundhla sa gaya hai
                
                (Verse 2)
                Kahin aisa toh nahi, ki tum bhi meri tarah
                Akelepan mein doobe, aansu baha rahe ho?
                Agar aisa hai, toh bhool jaana mujhe… meri iltijaa hai
                Main bas yahi dua karta hoon, dil se tumhare liye
                Ki tum hamesha khush raho
                
                (Bridge)
                Maine tumse dil se mohabbat ki thi
                Yeh ehsaas aaj bhi utna hi gehra hai
                Jaise kate hue phal ka, main ek adhoora hissa hoon
                Aaj bhi, tum hi meri roshni ho
                
                (Chorus)
                Andheron mein, maine tumhari parchhaai ko mehsoos kiya hai
                Har lakeer, har nishaan, mujhe saaf saaf yaad hai
                Jab bhi koi naya gham milta hai, jise seh nahi paata
                Toh bas ye aansu hain, jo behte rehte hain
                Kya kar raha tha main? Kya soch raha tha main?
                Sab kuch tere jaane se dhundhla sa gaya hai
                
                (Outro)
                Jaise kate hue phal ka, main ek adhoora hissa hoon…
                Aaj bhi… tum hi meri roshni ho.
                `
        
        },
        {
            title: "Yari Zindabad (V1)",
            artist: "SkyMusic",
            file: "audio/Yari Zindabad(V1).mp3",
            cover: "images/Yari Zindabad(V1).png",
            lyrics:
            `
(Verse 1)
शाम का वक़्त, शहर की सड़कें
दौड़ती बस, और अपनी धड़कनें
रोज़ का है ये मंज़र पुराना
वक़्त से लड़ते, हमको है जाना
कभी वॉलेट तेरा खाली, तो बिल मेरा हो जाता
कभी प्लेट से तेरी, मेरे मुँह में निवाला आ जाता
हैं थोड़े पागल, थोड़े आवारे
पर एक दूजे के, हम ही सहारे

(Chorus)
ये यारी अपनी है सबसे अनोखी, सुन लो कहानी
एक मैं, एक निहार रंजन, और प्रियांशु महाराणा
किस्से हैं नए, पर दोस्ती है वही पुरानी
इन्हीं पलों से तो बनती ज़िंदगानी!
हो... इन्हीं पलों से तो बनती ज़िंदगानी!

(Verse 2)
याद है वो दिन, बाइक वाला शैतान
छींटे उड़ाके, हुआ था अनजान
प्रियांशु के मुँह पे "गंगा-पानी" छिड़क गया
उसकी शकल देख के, अपना तो दिन ही बन गया
और भूलूँ कैसे मैं वो बारिश की रात
हीरो बनके उछला, पर बिगड़ गयी बात
रास्ते के पानी में पूरा ही डूब गया
और तुम दोनों का हँस-हँस के पेट ही दुख गया

(Chorus)
ये यारी अपनी है सबसे अनोखी, सुन लो कहानी
एक मैं, एक निहार रंजन, और प्रियांशु महाराणा
किस्से हैं नए, पर दोस्ती है वही पुरानी
इन्हीं पलों से तो बनती ज़िंदगानी!
हो... इन्हीं पलों से तो बनती ज़िंदगानी!

(Bridge)
हाँ, बस में सबसे आखिर में, उतरता हूँ मैं
थोड़ा पीछे रहने का ग़म भी करता हूँ मैं
पर सच कहूँ...
वो सफर तब तक ही सुहाना है, जब तक तुम्हारा साथ हो
मंज़िल से बेहतर ये रास्ते हैं, क्यूंकि इन रास्तों पे मेरे वास्ते तुम हो!
मेरे वास्ते तुम हो!

(गिटार सोलो - हल्का सा, मधुर)

(Chorus - थोड़ा और जोश और ऊर्जा के साथ)
ये यारी अपनी है सबसे अनोखी, सुन लो कहानी!
एक मैं, एक निहार रंजन, और प्रियांशु महाराणा!
किस्से हैं नए, पर दोस्ती है वही पुरानी
इन्हीं पलों से तो बनती ज़िंदगानी!
हो... इन्हीं पलों से तो बनती ज़िंदगानी!

(Outro)
हम ३ इडियट्स... हमेशा साथ...
अपनी यारी... ज़िंदाबाद!
(म्यूज़िक धीरे-धीरे खत्म होता है)
`
        },
        {
            title: "Yari Zindabad (V2)",
            artist: "SkyMusic",
            file: "audio/Yari Zindabad(V2).mp3",
            cover: "images/Yari Zindabad(V2).png",
            lyrics:
            `
(Verse 1)
शाम का वक़्त, शहर की सड़कें
दौड़ती बस, और अपनी धड़कनें
रोज़ का है ये मंज़र पुराना
वक़्त से लड़ते, हमको है जाना
कभी वॉलेट तेरा खाली, तो बिल मेरा हो जाता
कभी प्लेट से तेरी, मेरे मुँह में निवाला आ जाता
हैं थोड़े पागल, थोड़े आवारे
पर एक दूजे के, हम ही सहारे

(Chorus)
ये यारी अपनी है सबसे अनोखी, सुन लो कहानी
एक मैं, एक निहार रंजन, और प्रियांशु महाराणा
किस्से हैं नए, पर दोस्ती है वही पुरानी
इन्हीं पलों से तो बनती ज़िंदगानी!
हो... इन्हीं पलों से तो बनती ज़िंदगानी!

(Verse 2)
याद है वो दिन, बाइक वाला शैतान
छींटे उड़ाके, हुआ था अनजान
प्रियांशु के मुँह पे "गंगा-पानी" छिड़क गया
उसकी शकल देख के, अपना तो दिन ही बन गया
और भूलूँ कैसे मैं वो बारिश की रात
हीरो बनके उछला, पर बिगड़ गयी बात
रास्ते के पानी में पूरा ही डूब गया
और तुम दोनों का हँस-हँस के पेट ही दुख गया

(Chorus)
ये यारी अपनी है सबसे अनोखी, सुन लो कहानी
एक मैं, एक निहार रंजन, और प्रियांशु महाराणा
किस्से हैं नए, पर दोस्ती है वही पुरानी
इन्हीं पलों से तो बनती ज़िंदगानी!
हो... इन्हीं पलों से तो बनती ज़िंदगानी!

(Bridge)
हाँ, बस में सबसे आखिर में, उतरता हूँ मैं
थोड़ा पीछे रहने का ग़म भी करता हूँ मैं
पर सच कहूँ...
वो सफर तब तक ही सुहाना है, जब तक तुम्हारा साथ हो
मंज़िल से बेहतर ये रास्ते हैं, क्यूंकि इन रास्तों पे मेरे वास्ते तुम हो!
मेरे वास्ते तुम हो!

(गिटार सोलो - हल्का सा, मधुर)

(Chorus - थोड़ा और जोश और ऊर्जा के साथ)
ये यारी अपनी है सबसे अनोखी, सुन लो कहानी!
एक मैं, एक निहार रंजन, और प्रियांशु महाराणा!
किस्से हैं नए, पर दोस्ती है वही पुरानी
इन्हीं पलों से तो बनती ज़िंदगानी!
हो... इन्हीं पलों से तो बनती ज़िंदगानी!

(Outro)
हम ३ इडियट्स... हमेशा साथ...
अपनी यारी... ज़िंदाबाद!
(म्यूज़िक धीरे-धीरे खत्म होता है)
`
        }
    ]
    
    // You can add more playlists here like:
    // another_playlist: [ { ...songs... } ]

};