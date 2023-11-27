const nodemailer = require('nodemailer');

const sendEmail = async (to, name, orderNumber) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'melioraspero24@gmail.com',
        pass: 'dsocxlxfbqfzorvw',
      },
    });
    const message = {
      to,
      subject: `Novo pedido ${orderNumber} no site Best Buy Beauty`,
      html: `
      <h2 style='color: #AD902B; text-align: center;'>Olá, ${name}!</h2>
      <h3>Obrigado pela sua compra!</h3>
      <p>Começaremos a preparar o seu pedido logo que recebermos a confirmação do pagamento.</p>
      <p>Estes são os dados de que precisa para concluir a compra num multibanco ou online:</p>
      <hr>
      <div>IBAN</div>
      <div>MBway</div>
      <hr>
      <p>Tenha presente que terá de realizar o pagamento no máximo de 3 dias corridos. Caso contrário, o seu pedido será cancelado.</p>
      <p>Após o pagamento, é necessário enviar prinscript, comprovativo de pagamento para o email bestbuybeauty.pt@gmail.com com o número da encomenda.</p>
      <p>Data de entrega estimada 1-5 dias úteis. Após recebermos o pagamento da compra.</p>
      <h4>Dados do pedido</h4>
      <div>№ de pedido: ${orderNumber} </div>
      <div>Data do pedido: </div>
      <hr>
      <div>Envio para o domicílio</div>
      <div>${name}</div>
      <div>Address</div>
      <div>Phone</div>
      <hr>
      <div>Quantidade total</div>
      <div>Custo de entrega</div>
      <div>Valor total</div>
      `,
    };
    const info = await transporter.sendMail(message);
    console.log(('Message sent', info.messageId));
  } catch (error) {
    console.log(error);
    throw new Error('Email could not be sent');
  }
};

module.exports = sendEmail;
