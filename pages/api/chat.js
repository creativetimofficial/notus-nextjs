import redirect from "nextjs-redirect";

export default function chat(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  const wa =
    "https://api.whatsapp.com/send?phone=6285774085380&text=Halo%20Admin%20MD%20Dental%20Care,%20Saya%20" +
    body.name +
    "%20ingin%20melakukan%20konsultasi%20terkait%20" +
    body.keluhan +
    "%20ditanggal%20" +
    body.tgl +
    ".";

  res.redirect(301, wa);
}
