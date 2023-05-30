
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Verifica se o campo de email foi enviado
  if (isset($_POST['email'])) {
    // Recupera o valor do campo de email
    $email = $_POST['email'];

    // Construir o corpo do email
    $corpoEmail = "Detalhes do cliente:\n\n";
    $corpoEmail .= "Email: " . $email . "\n";

    // Envia o email usando a função mail()
    $assunto = "Pagamento";
    $headers = "From: seuemail@example.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    if (mail($email, $assunto, $corpoEmail, $headers)) {
      http_response_code(200);
      echo "Email enviado com sucesso!";
    } else {
      http_response_code(500);
      echo "Ocorreu um erro ao enviar o email. Por favor, tente novamente mais tarde.";
    }
  } else {
    http_response_code(400);
    echo "Campo de email é obrigatório.";
  }
} else {
  http_response_code(405);
  echo "Método não permitido.";
}
?>