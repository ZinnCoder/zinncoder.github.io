     // Recuperando o nome de usuário armazenado no localStorage
     const username = localStorage.getItem('username');

     // Verificando se o nome de usuário foi encontrado
     if (username) {
         document.getElementById('user-name').textContent = username;
         // Aqui você pode configurar a imagem do usuário, se necessário
         // document.getElementById('user-avatar').src = 'caminho/para/avatar.jpg';
     } else {
         // Caso o nome de usuário não exista, talvez redirecionar para a página de login
       //  window.location.href = 'login.html';
     }