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
        
        }
    ]
    
    // You can add more playlists here like:
    // another_playlist: [ { ...songs... } ]

};