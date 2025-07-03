import nodemailer from 'nodemailer';

export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    const data = JSON.parse(event.body);

    // validacija - možeš dodati i detaljniju ako želiš
    const { name, email, phone, message, treatment, date } = data;
    if (!name || !email || !phone) {
      return {
        statusCode: 400,
        body: 'Missing required fields'
      };
    }

    // SMTP transport za Zoho
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.eu',
      port: 465,
      secure: true,
      auth: {
        user: 'info@bioglow.rs', // tvoj Zoho mail
        pass: process.env.ZOHO_PASS, // iz Netlify environment var
      },
    });

    const mailOptions = {
      from: '"Bioglow Website" <info@bioglow.rs>',
      to: 'info@bioglow.rs', // ili gde želiš da stignu mailovi
      subject: `Nova poruka od ${name} sa sajta`,
      text: `
        Ime: ${name}
        Email: ${email}
        Telefon: ${phone}
        Tretman: ${treatment}
        Datum: ${date}
        Poruka: ${message || 'Nema poruke'}
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
