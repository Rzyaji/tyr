exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───

╔════════════════════
║ *FITUR BOT ${BotName}*
╠════════════════════
║╭──❉ *FITUR* ❉──
║│1. *.sticker*
║│2. *.ytmp3* <linkyoutube>
║│3. *.ytmp4* <linkyoutube>
║│4. *.tiktok* <linktiktok>
║│5. *.ig* <linkIg>
║│6. *.fb* <linkFb>
║│7. *.twt* <linkTweet>
╠════════════════════
║│1. *.wiki* <query>Wikipedia.
║│2. *.nulis* <teks>
║│3. *.quran*
║│4. *.pantun*
║│5. *.nama* <nama anda>
║│6. *.pasangan* <Aris & Cahya>
║│7. *.lirik* <nama lagu>
║│8. *.chord* <nama lagu>
╠════════════════════
║  *${BotName}*
╠════════════════════
║│1. *.sholat* <daerah>
║│2. *.covid*
║│3. *.infogempa*
╠════════════════════
║  *${BotName}*
╠════════════════════
║│1. *.creator*
║│2. *.owner*
╠════════════════════
║  *${BotName}*
╠════════════════════
║│1. *#info*
╠════════════════════
║  *${BotName}*
╠════════════════════
║│1. *.tts* <teks>
║│2. *.quotes*
║│3. *#donasi*
║│4. *.foto cewek*
║│5. *.foto cowok*
║│6. *.pokemon*
║│7. *.loli*
║│8. *.hentai*
║│9. *.fotoanime*
║│10. *.namaninja* <nama lu>
║│11. *.alay*  <teks>
║│12. *.say*  <teks>
║│13. *.infoig* <@_sadboy.ig>
╠════════════════════
║  *${BotName}*
╠════════════════════
║│1. *Group WhatsApp*
║│ _${grupch1}_
║│2. *YouTube <subscribe>*
║│ _${grupch2}_
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│4. *Creator ${BotName}*
║│ _${whatsapplu}_
║╰───────────
╠════════════════════
║ *MADE BY ARIS187 ID*
╚════════════════════`
}
