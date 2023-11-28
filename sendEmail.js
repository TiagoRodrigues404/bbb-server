const nodemailer = require('nodemailer');

const sendEmail = async (to, name, surname, orderNumber, address, phone, order) => {
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
      subject: `Detalhes do novo pedido №${orderNumber}`,
      html: `
          <div style='text-align: center; font-family: Raleway; letter-spacing: 0.5px;'>
			<h2 style='color: #252525; text-align: center;'>
              Olá, ${name}!
            </h2>
            <div>
              <h3 style='color: #AD902B;'>
                  Obrigado pela sua compra!
              </h3>                        
              <p>
                  Começaremos a preparar o seu pedido logo que recebermos a confirmação do pagamento.
              </p>
              <p style='border-bottom: 2px solid #f6f6f6; padding: 0 0 20px 0;'>
                  Estes são os dados de que precisa para concluir a compra num multibanco ou online:
              </p>
              <div style='border-bottom: 2px solid #f6f6f6; padding: 0 0 20px 0;'>
                  <div style='display: flex; justify-content: space-between;'>
                      <div><b>IBAN</b></div>
                      <div><b>{paymentDetails.length && !isLoading ? paymentDetails[0].account : 'Carregando...'}</b></div>
                  </div>
                  <div style='display: flex; justify-content: space-between;'>
                      <div><b>Nome</b></div>
                      <div><b>{paymentDetails.length && !isLoading ? paymentDetails[0].recipient : 'Carregando...'}</b></div>
                  </div>      
                  {mbWayPayments.length ? mbWayPayments.map((payment, i) => 
                  <div style='display: flex; justify-content: space-between;' key={i}>
                      <div><b>MBway</b></div>
                      <div><b>{payment.account}</b></div>
                  </div>  
                  ) : ''}
              </div>
              <p>
                  Tenha presente que terá de realizar o pagamento no máximo <b>de 3 dias</b> corridos. Caso contrário, o seu pedido será cancelado.
              </p>
              <p>
                Após o pagamento deverá enviar um texto de confirmação de pagamento em resposta a esta carta ou para o email <b>bestbuybeauty.pt@gmail.com</b> indicando o número da encomenda.
              </p>
              <p style='border-bottom: 2px solid #f6f6f6; padding: 0 0 20px 0;'>
                  Data de entrega estimada 1-5 dias úteis. Após recebermos o pagamento da compra.   
              </p>
              <h3>
                  Dados do pedido
              </h3>
              <div>
                  <div style='padding-bottom: 15px;'>
                      <div>
                          <b>№ de pedido: ${orderNumber}</b>
                      </div>
                  </div>
                  <div>
                      <div>
                          <b>Envio para o domicílio</b>
                      </div>
                  </div>
                  <p>
                      ${name} ${surname}
                  </p>
                  <p>
                      ${address}
                  </p>
                  <p style='border-bottom: 2px solid #f6f6f6; padding: 0 0 20px 0;'>
                      Tel. ${phone}
                  </p>
                  <div style='display: flex; justify-content: space-between;'>
                      <div>
                          <b>Quantidade total</b>
                      </div>
                      <div>
                          <b>{totalCount}</b>
                      </div>                                           
                  </div>    
                  <div>
                  ${order}
                  </div>  
                  {items.map((item, i) =>
                    <div key={i}>
                        <p><b>{i + 1}. {item.name}</b></p>
                        <p>Marca: {item.company}</p>
                        <p>Código: {item.code}</p>
                        {item.curlArr
                            ?
                            <p>Curvatura: {item.curlArr}</p>
                            :
                            ''
                        }
                        {item.thicknessArr
                            ?
                            <p>Grossura:  {item.thicknessArr} mm</p>
                            :
                            ''
                            }
                        {item.lengthArr
                            ?
                            <p>Tamanho: {item.lengthArr} mm</p>
                            :
                            ''
                        }
                        {item.info && !item.isLashes
                            ?
                            item.info.map((p, i) => 
                                <p key={i}>{p.title}: {p.description}</p>
                            )
                            :''
                        }
                        <p>Preço: {item.price} €</p>
                        <p>Quantidade: {item.count}</p>
                    </div>
                  )}
                  <div style='display: flex; justify-content: space-between; padding-bottom: 15px;'>
                      <div>
                          <b>Custo de entrega</b>
                      </div>
                      <div>
                          <b>{deliveryPrice} €</b>
                      </div>
                  </div>  
                  <div style='display: flex; justify-content: space-between; border-bottom: 2px solid #f6f6f6; padding: 0 0 20px 0;'>
                      <div>
                          <b>Valor total</b>
                      </div>
                      <div>
                          <b>{orderTotal} €</b>
                      </div>
                  </div>                            
              </div>
          </div>
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
