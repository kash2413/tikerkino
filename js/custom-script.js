var lang = trad.themoney_lang; // user language
var jQuery_money = jQuery.noConflict();
/*jQuery_money(window).on("load", loadSubThemes);
jQuery_money("#theme_money").on("change", loadSubThemes);*/
var loginDisplayed = false;

jQuery_money( document ).ready(function() {
  jQuery_money("#menu_2").on("click", function() {

    jQuery_money("#menu_1").removeClass("nav-tab-active");

    jQuery_money("#menu_3").removeClass("nav-tab-active");

    jQuery_money("#menu_4").removeClass("nav-tab-active");

    jQuery_money("#menu_5").removeClass("nav-tab-active");

    jQuery_money("#menu_2").addClass("nav-tab-active");

    jQuery_money("#menu1").removeClass("tab-content-active");

    jQuery_money("#menu3").removeClass("tab-content-active");

    jQuery_money("#menu4").removeClass("tab-content-active");

    jQuery_money("#menu5").removeClass("tab-content-active");

    jQuery_money("#menu1").addClass("tab-content");

    jQuery_money("#menu3").addClass("tab-content");

    jQuery_money("#menu4").addClass("tab-content");

    jQuery_money("#menu5").addClass("tab-content");

    jQuery_money("#menu2").addClass("tab-content-active");

  });

  jQuery_money("#menu_1").on("click", function() {

    jQuery_money("#menu_2").removeClass("nav-tab-active");

    jQuery_money("#menu_3").removeClass("nav-tab-active");

    jQuery_money("#menu_4").removeClass("nav-tab-active");

    jQuery_money("#menu_5").removeClass("nav-tab-active");

    jQuery_money("#menu_1").addClass("nav-tab-active");

    jQuery_money("#menu2").removeClass("tab-content-active");

    jQuery_money("#menu3").removeClass("tab-content-active");

    jQuery_money("#menu4").removeClass("tab-content-active");

    jQuery_money("#menu5").removeClass("tab-content-active");

    jQuery_money("#menu2").addClass("tab-content");

    jQuery_money("#menu3").addClass("tab-content");

    jQuery_money("#menu4").addClass("tab-content");

    jQuery_money("#menu5").addClass("tab-content");

    jQuery_money("#menu1").addClass("tab-content-active");

  });

  jQuery_money("#menu_3").on("click", function() {

    jQuery_money("#menu_1").removeClass("nav-tab-active");

    jQuery_money("#menu_2").removeClass("nav-tab-active");

    jQuery_money("#menu_4").removeClass("nav-tab-active");

    jQuery_money("#menu_5").removeClass("nav-tab-active");

    jQuery_money("#menu_3").addClass("nav-tab-active");

    jQuery_money("#menu1").removeClass("tab-content-active");

    jQuery_money("#menu2").removeClass("tab-content-active");

    jQuery_money("#menu4").removeClass("tab-content-active");

    jQuery_money("#menu5").removeClass("tab-content-active");

    jQuery_money("#menu1").addClass("tab-content");

    jQuery_money("#menu2").addClass("tab-content");

    jQuery_money("#menu4").addClass("tab-content");

    jQuery_money("#menu5").addClass("tab-content");

    jQuery_money("#menu3").addClass("tab-content-active");

  });

  jQuery_money("#menu_4").on("click", function() {
    jQuery_money("#menu_1").removeClass("nav-tab-active");

    jQuery_money("#menu_2").removeClass("nav-tab-active");

    jQuery_money("#menu_3").removeClass("nav-tab-active");

    jQuery_money("#menu_5").removeClass("nav-tab-active");

    jQuery_money("#menu_4").addClass("nav-tab-active");

    jQuery_money("#menu1").removeClass("tab-content-active");

    jQuery_money("#menu2").removeClass("tab-content-active");

    jQuery_money("#menu3").removeClass("tab-content-active");

    jQuery_money("#menu5").removeClass("tab-content-active");

    jQuery_money("#menu1").addClass("tab-content");

    jQuery_money("#menu2").addClass("tab-content");

    jQuery_money("#menu3").addClass("tab-content");

    jQuery_money("#menu5").addClass("tab-content");

    jQuery_money("#menu4").addClass("tab-content-active");
  });

  jQuery_money("#menu_5").on("click", function() {
    jQuery_money("#menu_1").removeClass("nav-tab-active");

    jQuery_money("#menu_2").removeClass("nav-tab-active");

    jQuery_money("#menu_3").removeClass("nav-tab-active");

    jQuery_money("#menu_4").removeClass("nav-tab-active");

    jQuery_money("#menu_5").addClass("nav-tab-active");

    jQuery_money("#menu1").removeClass("tab-content-active");

    jQuery_money("#menu2").removeClass("tab-content-active");

    jQuery_money("#menu3").removeClass("tab-content-active");

    jQuery_money("#menu4").removeClass("tab-content-active");

    jQuery_money("#menu1").addClass("tab-content");

    jQuery_money("#menu2").addClass("tab-content");

    jQuery_money("#menu3").addClass("tab-content");

    jQuery_money("#menu4").addClass("tab-content");

    jQuery_money("#menu5").addClass("tab-content-active");
  });
});

// REGISTRATION START

jQuery_money('#reg_form').validate({

  rules: {
      type_structure_money: {
        required: true
      },
      tel_money: {
        required: true,
        number: true,
        minlength: 10
      },
      mail_money: {
        required: true,
        email: true
      },
      nom_money:  {
        required: true,
      },
      prenom_money:  {
        required: true,
      },
      password_money:  {
        required: true,
        minlength: 8
      },
      c_password_money:  {
        required: true,
        equalTo: "#password_money"
      },
      adresse_money:  {
        required: true,
      },
      ville_money:  {
        required: true,
      },
      cp_money:  {
        required: true,
      },
      country_money:  {
        required: true,
      }
    },
  messages: {
    type_structure_money: "Please select a structure",
    country_money: "Please select a country.",
    cp_money: "Please enter a zip code.",
    ville_money: "Please enter a city.",
    adresse_money: "Please enter a valid adress.",
    tel_money: "Please enter a valid phone number.",
    nom_money: "The lastname is required.",
    prenom_money: "The firstname is required.",
    mail_money: "Please enter a valid email address.",
    password_money: {
      required: "The Password is required.",
      minlength: "The password should contain at least 8 characters."
    },
    c_password_money: {
      required: "The Password confirmation is required.",
      equalTo: "The Password confirmation must be equal to the password."
    }
  }
});

jQuery_money('#reg_form_sec').validate({
  rules:
    {
      theme_money: {
        required: true
      },
      sub_theme_money: {
        required: true
      },
      lang_money: {
        required: true
      },
      vu_money : {
        required: true
      }
    },
  messages: {
    theme_money: "Please choose a category.",
    sub_theme_money: "Please choose a subcategory.",
    lang_money: "Please choose a country.",
    vu_money : "Please choose your amount"
  }
});

jQuery_money('#token_form').validate({
  rules:
    {
      themoneytizer_setting_siteid: {
        required: true
      }
    },
  messages: {
    themoneytizer_setting_siteid: {
      required: "The Moneytizer ID is required."
    }
  }
});

jQuery_money('#reg_form_sec').submit(function(e) {
  e.preventDefault();
  var form = this;

  if (loginDisplayed === true) {
    var login = jQuery_money('#themoneytizer_mail_connexion_site').val();
    var password = jQuery_money('#themoneytizer_password_connexion_site').val();
  }
  else {
    var login = '';
    var password = '';
  }

  var url_money = jQuery_money('#url_money').val();
  var theme_money = jQuery_money('#theme_money').val();
  var vu_money = jQuery_money('[name="vu_money"]').val();
  var lang_money = jQuery_money('#lang_money').val();
  var newsletter_money = jQuery_money('#newsletter_money').val();

  if (login !== '' && password !== '') {
    var credentials = [login, password];
    var data = {
      action: 'register_site',
      credentials: credentials,
      url_money: url_money,
      theme_money: theme_money,
      vu_money: vu_money,
      lang_money: lang_money,
    };

    jQuery_money.post(the_ajax_script.ajaxurl, data, function(response) {
      var result = JSON.parse(response.substr(0, response.length-1));

      if (result['error'] === true) {
        if (result['type'] === 'server') {
          switch (lang) {
            case 'fr':
              var message = 'Erreur, veuillez essayer ultérieurement';
              break;
            case 'es':
              var message = 'Error. Inténtalo más tarde';
              break;
            case 'it':
              var message = 'Errore, prego riprova';
              break;
            case 'pt':
              var message = 'Erro, por favor tente novamente mais tarde';
              break;
            case 'de':
              var message = 'Fehler. Bitte versuchen Sie es später noch einmal';
              break;
            case 'ru':
              var message = 'Ошибка, попробуйте позже';
              break;
            case 'us':
            case 'en':
            default:
              var message = 'Error, please try later';
          }
          swal({
            icon: 'error',
            title: message,
            timer: 2000,
          });
        }
        else if (result['type'] === 'site_registration') {
          switch (lang) {
            case 'fr':
              var message = 'Woops ! Votre site n\'a pas pu être enregistré !';
              break;
            case 'es':
              var message = '¡Uy! Tu sitio no ha podido ser guardado';
              break;
            case 'it':
              var message = 'Woops! Il tuo sito non può essere registrato!';
              break;
            case 'pt':
              var message = 'Oops, O seu site não pode ser registado !';
              break;
            case 'de':
              var message = 'Oops! Deine Webseite konnte nicht registriert werden.';
              break;
            case 'ru':
              var message = 'Упс! Ваш сайт не был зарегистрирован!';
              break;
            case 'us':
            case 'en':
            default:
              var message = 'Oops! There was an error creating your account.';
          }
          swal({
            icon: 'error',
            title: message,
            timer: 2000,
          });
        }
        else if (result['type'] === 'access_denied') {
          switch (lang) {
            case 'fr':
              var message = 'Woops ! Vos identifiants sont incorrectes !';
              break;
            case 'es':
              var message = '¡Uy! Tus datos son incorrectos.';
              break;
            case 'it':
              var message = 'Woops! Le tue credenziali sono errate!';
              break;
            case 'pt':
              var message = 'Oops ! Os seus dados de login estão incorrectos !';
              break;
            case 'de':
              var message = 'Oops! Deine Login-Daten sind inkorrekt.';
              break;
            case 'ru':
              var message = 'Упс! Ошибка в личных данных!';
              break;
            case 'us':
            case 'en':
            default:
              var message = 'Oops! Your login details are incorrect.';
          }
          swal({
            icon: 'error',
            title: message,
            timer: 2000,
          });
        }
        else if (result['type'] === 'not_authorized') {
          switch (lang) {
            case 'fr':
              var message = 'Vous n\'êtes pas autorisé à vous connecter. Vous avez dù recevoir un mail à ce sujet !';
              break;
            case 'es':
              var message = 'No estás autorizado a conectarte. Has debido recibir un mail al respecto.';
              break;
            case 'it':
              var message = 'Non sei autorizzato ad accedere Devi aver ricevuto una mail su questo argomento!';
              break;
            case 'pt':
              var message = 'Você não tem permissão para fazer login.  Você deve ter recebido um e-mail sobre este assunto !';
              break;
            case 'de':
              var message = 'Du bist nicht dazu autorisiert, dich mit deinem Nutzerkonto zu verbinden. Du solltest dazu eine E-Mail erhalten haben.';
              break;
            case 'ru':
              var message = 'Пожалуйста, дождитесь подтверждения вашей регистрации по e-mail!';
              break;
            case 'us':
            case 'en':
            default:
              var message = 'You are not authorised to access your account. You received an email on that matter.';
          }
          swal({
            icon: 'error',
            title: message,
            timer: 2000,
          });
        }
      }
      else {
        form.submit();
      }
    });
  }
  else {
    var data = {
      action: 'check_registration_validity',
      url_money: url_money,
    };

    jQuery_money.post(the_ajax_script.ajaxurl, data, function(response) {
      var result = JSON.parse(response.substr(0, response.length-1));

      if (result['error'] === true) {
        if (result['type'] === 'server') {
          switch (lang) {
            case 'fr':
              var message = 'Erreur, veuillez essayer ultérieurement';
              break;
            case 'es':
              var message = 'Error. Inténtalo más tarde';
              break;
            case 'it':
              var message = 'Errore, prego riprova';
              break;
            case 'pt':
              var message = 'Erro, por favor tente novamente mais tarde';
              break;
            case 'de':
              var message = 'Fehler. Bitte versuchen Sie es später noch einmal';
              break;
            case 'ru':
              var message = 'Ошибка, попробуйте позже';
              break;
            case 'us':
            case 'en':
            default:
              var message = 'Error, please try later';
          }
          swal({
            icon: 'error',
            title: message,
            timer: 2000,
          });
        }
        else if (result['type'] === 'registered') {
          switch (lang) {
            case 'fr':
              var message = 'Vous êtes déjà enregistré ! Connectez à votre moneybox et récupérer votre token d\'activation';
              break;
            case 'es':
              var message = '¡Ya estás registrado! Conéctate a tu espacio personal para obtener tu código de activación.';
              break;
            case 'it':
              var message = 'Sei già registrato! Connettiti allla tua moneybox e recupera il tuo token di attivazione';
              break;
            case 'pt':
              var message = 'Você já está registado ! Conecte-se à sua caixa de dinheiro e recupere o seu token de ativação.';
              break;
            case 'de':
              var message = 'Du hast bereits ein Nutzerkonto. Logge dich in dein Dashboard ein. Hier findest du eine The Moneytizer WordPress-ID zu jeder Webseite.';
              break;
            case 'ru':
              var message = 'Вы уже зарегистрированы!Зайдите в свой личный кабинет и получите ID вашего сайта для активации.';
              break;
            case 'us':
            case 'en':
            default:
              var message = 'You are already registered! Sign in to your moneybox and retrieve your The Moneytizer WordPress ID for each of your websites.';
          }
          swal({
            icon: 'warning',
            title: message,
            timer: 2000,
          });

          jQuery_money('#connexion-token').removeClass('not-show');
        }
        else if (result['type'] === 'site') {
          switch (lang) {
            case 'fr':
              var message = 'Votre compte est déjà enregistré ! Connectez vous pour inscrire votre site.';
              break;
            case 'es':
              var message = '¡Tu cuenta ya está registrada! Conéctate para añadir tu sitio web.';
              break;
            case 'it':
              var message = 'Il tuo account è già registrato! Accedi per registrare il tuo sito.';
              break;
            case 'pt':
              var message = 'A sua conta já está registada ! Faça o login para registar o seu site.';
              break;
            case 'de':
              var message = 'Dein Nutzerkonto ist bereits aktiviert. Logge dich ein, um deine Webseite(n) hinzuzufügen.';
              break;
            case 'ru':
              var message = 'Ваш аккаунт уже зарегистрирован! Войдите, для того  чтобы добавить  сайт.';
              break;
            case 'us':
            case 'en':
            default:
              var message = 'This account already exists. Sign in to your account to start adding websites.';
          }
          swal({
            icon: 'warning',
            title: message,
            timer: 2000,
          });

          jQuery_money('tr').removeClass('not-show');
          loginDisplayed = true;
        }
      }
      else {
        if (result['type'] === 'all') {
          var route = 'register_user_and_site';

          var data2 = {
            action: route,
            url_money: url_money,
            theme_money: theme_money,
            vu_money: vu_money,
            lang_money: lang_money,
            newsletter_money : newsletter_money
          };

          jQuery_money.post(the_ajax_script.ajaxurl, data2, function(response) {
            var result = JSON.parse(response.substr(0, response.length-1));

            if (result['error'] === true) {
              if (result['type'] === 'user_registration') {
                switch (lang) {
                  case 'fr':
                    var message = 'Woops ! Un problème est survenu lors de la création du compte !';
                    break;
                  case 'es':
                    var message = '¡Uy! Se ha producido un error durante la creación de tu cuenta.';
                    break;
                  case 'it':
                    var message = 'Woops! Si è verificato un problema durante la creazione dell\'account!';
                    break;
                  case 'pt':
                    var message = 'Oops ! Ocorreu um problema ao criar a sua conta !';
                    break;
                  case 'de':
                    var message = '...';
                    break;
                  case 'ru':
                    var message = '...';
                    break;
                  case 'us':
                  case 'en':
                  default:
                    var message = 'Woops! An error occurred during the account registration!';
                }
                swal({
                  icon: 'error',
                  title: message,
                  timer: 2000,
                });
              }
              else if (result['type'] === 'site_registration') {
                switch (lang) {
                  case 'fr':
                    var message = 'Woops ! Votre site n\'a pas pu être enregistré !';
                    break;
                  case 'es':
                    var message = '¡Uy! Tu sitio no ha podido ser guardado';
                    break;
                  case 'it':
                    var message = 'Woops! Il tuo sito non può essere registrato!';
                    break;
                  case 'pt':
                    var message = 'Oops, O seu site não pode ser registado !';
                    break;
                  case 'de':
                    var message = 'Oops! Deine Webseite konnte nicht registriert werden.';
                    break;
                  case 'ru':
                    var message = 'Упс! Ваш сайт не был зарегистрирован!';
                    break;
                  case 'us':
                  case 'en':
                  default:
                    var message = 'Oops! There was an error creating your account.';
                }
                swal({
                  icon: 'error',
                  title: message,
                  timer: 2000,
                });
              }
            }
            else {
              form.submit();
            }
          });
        }
      }
    });
  }
});

jQuery_money('#connexion_form').validate({
  rules:
    {
      themoneytizer_setting_mail_connexion: {
        required: true
      },
      themoneytizer_setting_password_connexion: {
        required: true
      }
    },
  messages: {
    themoneytizer_setting_mail_connexion: "Please enter your email.",
    themoneytizer_setting_password_connexion: "Please enter your password."
  }
});

jQuery_money('#connexion_form').submit(function(e) {
  e.preventDefault();
  var form = this;
  var login = jQuery_money('#themoneytizer_setting_mail_connexion').val();
  var password = jQuery_money('#themoneytizer_setting_password_connexion').val();

  var data = {
    action: 'login_user',
    credentials: [login, password]
  };

  jQuery_money.post(the_ajax_script.ajaxurl, data, function(response) {
    var result = JSON.parse(response.substr(0, response.length - 1));

    if (result['error'] === true) {
      if (result['type'] === 'server') {
        switch (lang) {
          case 'fr':
            var message = 'Erreur, veuillez essayer ultérieurement';
            break;
          case 'es':
            var message = 'Error. Inténtalo más tarde';
            break;
          case 'it':
            var message = 'Errore, prego riprova';
            break;
          case 'pt':
            var message = 'Erro, por favor tente novamente mais tarde';
            break;
          case 'de':
            var message = 'Fehler. Bitte versuchen Sie es später noch einmal';
            break;
          case 'ru':
            var message = 'Ошибка, попробуйте позже';
            break;
          case 'us':
          case 'en':
          default:
            var message = 'Error, please try later';
        }
        swal({
          icon: 'error',
          title: message,
          timer: 2000,
        });
      }
      else if (result['type'] === 'access_denied') {
        switch (lang) {
          case 'fr':
            var message = 'Woops ! Vos identifiants sont incorrectes !';
            break;
          case 'es':
            var message = '¡Uy! Tus datos son incorrectos.';
            break;
          case 'it':
            var message = 'Woops! Le tue credenziali sono errate!';
            break;
          case 'pt':
            var message = 'Oops ! Os seus dados de login estão incorrectos !';
            break;
          case 'de':
            var message = 'Oops! Deine Login-Daten sind inkorrekt.';
            break;
          case 'ru':
            var message = 'Упс! Ошибка в личных данных!';
            break;
          case 'us':
          case 'en':
          default:
            var message = 'Oops! Your login details are incorrect.';
        }
        swal({
          icon: 'error',
          title: message,
          timer: 2000,
        });
      }
      else if (result['type'] === 'not_authorized') {
        switch (lang) {
          case 'fr':
            var message = 'Vous n\'êtes pas autorisé à vous connecter. Vous avez dù recevoir un mail à ce sujet !';
            break;
          case 'es':
            var message = 'No estás autorizado a conectarte. Has debido recibir un mail al respecto.';
            break;
          case 'it':
            var message = 'Non sei autorizzato ad accedere Devi aver ricevuto una mail su questo argomento!';
            break;
          case 'pt':
            var message = 'Você não tem permissão para fazer login.  Você deve ter recebido um e-mail sobre este assunto !';
            break;
          case 'de':
            var message = 'Du bist nicht dazu autorisiert, dich mit deinem Nutzerkonto zu verbinden. Du solltest dazu eine E-Mail erhalten haben.';
            break;
          case 'ru':
            var message = 'Пожалуйста, дождитесь подтверждения вашей регистрации по e-mail!';
            break;
          case 'us':
          case 'en':
          default:
            var message = 'You are not authorised to access your account. You received an email on that matter.';
        }
        swal({
          icon: 'error',
          title: message,
          timer: 2000,
        });
      }
    }
    else {
      form.submit();
    }
  });
});

jQuery_money('#reg_form_third').validate({
  rules:
    {
      theme_money: {
        required: true
      },
      sub_theme_money: {
        required: true
      },
      lang_money: {
        required: true
      },
      vu_money : {
        required: true
      }
    },
  messages: {
    theme_money: "Please choose a category.",
    sub_theme_money: "Please choose a subcategory.",
    lang_money: "Please choose a country.",
    vu_money : "Please choose your amount"
  }
});

jQuery_money('#reg_form_third').submit(function(e) {
  e.preventDefault();

  if(jQuery(this).valid()) {
    var form = this;
    var login = jQuery_money('#themoneytizer_setting_mail_connexion').val();
    var password = jQuery_money('#themoneytizer_setting_password_connexion').val();
    var url_money = jQuery_money('#url_money').val();
    var theme_money = jQuery_money('#theme_money').val();
    var vu_money = jQuery_money('[name="vu_money"]').val();
    var country_money = jQuery_money('#lang_money').val();

    var data = {
      action: 'register_site',
      credentials: [login, password],
      url_money: url_money,
      theme_money: theme_money,
      vu_money: vu_money,
      country_money: country_money,
    };

    jQuery_money.post(the_ajax_script.ajaxurl, data, function(response) {
      var result = JSON.parse(response.substr(0, response.length-1));

      if (result['error'] === true) {
        if (result['type'] === 'server') {
          switch (lang) {
            case 'fr':
              var message = 'Erreur, veuillez essayer ultérieurement';
              break;
            case 'es':
              var message = 'Error. Inténtalo más tarde';
              break;
            case 'it':
              var message = 'Errore, prego riprova';
              break;
            case 'pt':
              var message = 'Erro, por favor tente novamente mais tarde';
              break;
            case 'de':
              var message = 'Fehler. Bitte versuchen Sie es später noch einmal';
              break;
            case 'ru':
              var message = 'Ошибка, попробуйте позже';
              break;
            case 'us':
            case 'en':
            default:
              var message = 'Error, please try later';
          }
          swal({
            icon: 'error',
            title: message,
            timer: 2000,
          });
        }
        else if (result['type'] === 'site_registration') {
          switch (lang) {
            case 'fr':
              var message = 'Woops ! Votre site n\'a pas pu être enregistré !';
              break;
            case 'es':
              var message = '¡Uy! Tu sitio no ha podido ser guardado';
              break;
            case 'it':
              var message = 'Woops! Il tuo sito non può essere registrato!';
              break;
            case 'pt':
              var message = 'Oops, O seu site não pode ser registado !';
              break;
            case 'de':
              var message = 'Oops! Deine Webseite konnte nicht registriert werden.';
              break;
            case 'ru':
              var message = 'Упс! Ваш сайт не был зарегистрирован!';
              break;
            case 'us':
            case 'en':
            default:
              var message = 'Oops! There was an error creating your account.';
          }
          swal({
            icon: 'error',
            title: message,
            timer: 2000,
          });
        }
        else if (result['type'] === 'access_denied') {
          switch (lang) {
            case 'fr':
              var message = 'Woops ! Vos identifiants sont incorrectes !';
              break;
            case 'es':
              var message = '¡Uy! Tus datos son incorrectos.';
              break;
            case 'it':
              var message = 'Woops! Le tue credenziali sono errate!';
              break;
            case 'pt':
              var message = 'Oops ! Os seus dados de login estão incorrectos !';
              break;
            case 'de':
              var message = 'Oops! Deine Login-Daten sind inkorrekt.';
              break;
            case 'ru':
              var message = 'Упс! Ошибка в личных данных!';
              break;
            case 'us':
            case 'en':
            default:
              var message = 'Oops! Your login details are incorrect.';
          }
          swal({
            icon: 'error',
            title: message,
            timer: 2000,
          });
        }
        else if (result['type'] === 'not_authorized') {
          switch (lang) {
            case 'fr':
              var message = 'Vous n\'êtes pas autorisé à vous connecter. Vous avez dù recevoir un mail à ce sujet !';
              break;
            case 'es':
              var message = 'No estás autorizado a conectarte. Has debido recibir un mail al respecto.';
              break;
            case 'it':
              var message = 'Non sei autorizzato ad accedere Devi aver ricevuto una mail su questo argomento!';
              break;
            case 'pt':
              var message = 'Você não tem permissão para fazer login.  Você deve ter recebido um e-mail sobre este assunto !';
              break;
            case 'de':
              var message = 'Du bist nicht dazu autorisiert, dich mit deinem Nutzerkonto zu verbinden. Du solltest dazu eine E-Mail erhalten haben.';
              break;
            case 'ru':
              var message = 'Пожалуйста, дождитесь подтверждения вашей регистрации по e-mail!';
              break;
            case 'us':
            case 'en':
            default:
              var message = 'You are not authorised to access your account. You received an email on that matter.';
          }
          swal({
            icon: 'error',
            title: message,
            timer: 2000,
          });
        }
        else if (result['type'] === 'registered') {
          switch (lang) {
            case 'fr':
              var message = 'Vous êtes déjà enregistré ! Connectez à votre moneybox et récupérer votre token d\'activation';
              break;
            case 'es':
              var message = '¡Ya estás registrado! Conéctate a tu espacio personal para obtener tu código de activación.';
              break;
            case 'it':
              var message = 'Sei già registrato! Connettiti allla tua moneybox e recupera il tuo token di attivazione';
              break;
            case 'pt':
              var message = 'Você já está registado ! Conecte-se à sua caixa de dinheiro e recupere o seu token de ativação.';
              break;
            case 'de':
              var message = 'Du hast bereits ein Nutzerkonto. Logge dich in dein Dashboard ein. Hier findest du eine The Moneytizer WordPress-ID zu jeder Webseite.';
              break;
            case 'ru':
              var message = 'Вы уже зарегистрированы!Зайдите в свой личный кабинет и получите ID вашего сайта для активации.';
              break;
            case 'us':
            case 'en':
            default:
              var message = 'You are already registered! Sign in to your moneybox and retrieve your The Moneytizer WordPress ID for each of your websites.';
          }
          swal({
            icon: 'warning',
            title: message
          });

          jQuery_money('#connexion-token').removeClass('not-show');
        }
      }
      else {
        form.submit();
      }
    });
  }
});

// REGISTRATION END


// ADS.TXT & CMP START

jQuery_money('#themoney-download-ads-txt').click(function () {
  var data = {
    action: 'get_ads_txt'
  };

  jQuery.post(the_ajax_script.ajaxurl, data, function(response) {
    if (response === '0') { // wordpress always return string + '0'
      switch (lang) {
        case 'fr':
          var message = 'Une erreur est survenue !';
          break;
        case 'es':
          var message = '¡Se ha producido un error!';
          break;
        case 'it':
          var message = 'Si è verificato un errore!';
          break;
        case 'pt':
          var message = 'Ocorreu um erro !';
          break;
        case 'de':
          var message = 'Es ist ein Fehler aufgetreten!';
          break;
        case 'ru':
          var message = 'Произошла ошибка!';
          break;
        case 'pl':
          var message = 'Wystąpił błąd!';
          break;
        case 'us':
        case 'en':
        default:
          var message = 'An error occurred!';
      }
      swal({
        icon: 'error',
        title: message,
      });
    }
    else {
      var length_str = response.length -1; // wordpress always return string + '0'
      var new_response = response.substr(0, length_str); // wordpress always return string + '0' so we delete it
      var a = document.createElement('a');
      var data_type = 'data:text/text;charset=utf-8';
      a.href = data_type + ','+encodeURI(new_response);
      a.download = 'ads.txt';
      a.click();
    }
  });
});

function checkAdsTxt(siteId) {
  var data = {
    action: 'check_ads_txt',
    siteId: siteId
  };

  jQuery.post(the_ajax_script.ajaxurl, data, function(response) {
    var result = JSON.parse(response.substr(0, response.length-1));

    if (result['error'] === true) {
      if (result['type'] === 'server') {
        switch (lang) {
          case 'fr':
            var message = 'Erreur, veuillez essayer ultérieurement';
            break;
          case 'es':
            var message = 'Error. Inténtalo más tarde';
            break;
          case 'it':
            var message = 'Errore, prego riprova';
            break;
          case 'pt':
            var message = 'Erro, por favor tente novamente mais tarde';
            break;
          case 'de':
            var message = 'Fehler. Bitte versuchen Sie es später noch einmal';
            break;
          case 'ru':
            var message = 'Ошибка, попробуйте позже';
            break;
          case 'us':
          case 'en':
          default:
            var message = 'Error, please try later';
        }
        swal({
          icon: 'error',
          title: message,
          timer: 2000,
        });
      }

      swal({
        icon: 'error',
        title: message,
      });
    } else {
      if (result['type'] === 'ok') {
        switch (lang) {
          case 'fr':
            var message = 'Votre fichier est bien intégré et à jour !';
            break;
          case 'es':
            var message = '¡Tu archivo ha sido bien integrado y actualizado!';
            break;
          case 'it':
            var message = 'Il file ads.txt è inserito e aggiornato!';
            break;
          case 'pt':
            var message = 'O vosso arquivo é bem integrado e actualizado !';
            break;
          case 'de':
            var message = 'Ihre ads.txt ist korrekt hinterlegt und auf dem neuesten Stand';
            break;
          case 'ru':
            var message = 'Файл ads.txt установлен и обновлен';
            break;
          case 'us':
          case 'en':
          default:
            var message = 'Your file is well integrated and up to date!';
        }
        swal({
          icon: 'success',
          title: message,
          timer: 2000,
        });
      }
      else if (result['type'] === 'update') {
        switch (lang) {
          case 'fr':
            var message = 'Votre fichier est bien intégré mais n\'est pas à jour !';
            break;
          case 'es':
            var message = '¡Tu archivo ha sido integrado correctamente pero no está actualizado!';
            break;
          case 'it':
            var message = 'Il file è stato integrato correttamente ma non è aggiornato!';
            break;
          case 'pt':
            var message = 'O vosso ficheiro está bem integrado mas não atualizado !';
            break;
          case 'de':
            var message = 'Ihre ads.txt ist korrekt hinterlegt, aber nicht auf dem neuesten Stand';
            break;
          case 'ru':
            var message = 'Файл ads.txt добавлен, но не обновлен!';
            break;
          case 'us':
          case 'en':
          default:
            var message = 'Your file is well integrated but is not up to date!';
        }
        swal({
          icon: 'info',
          title: message,
          timer: 2000,
        });
      }
      else if (result['type'] === 'no') {
        switch (lang) {
          case 'fr':
            var message = 'Votre fichier n\'est pas intégré !';
            break;
          case 'es':
            var message = '¡Tu archivo no ha sido integrado!';
            break;
          case 'it':
            var message = 'Il file non è stato integrato !';
            break;
          case 'pt':
            var message = 'O seu arquivo não está integrado !';
            break;
          case 'de':
            var message = 'Ihre ads.txt ist nicht hinterlegt.';
            break;
          case 'ru':
            var message = 'Файл ads.txt отсутствует!';
            break;
          case 'us':
          case 'en':
          default:
            var message = 'Your file is not integrated!';
        }
        swal({
          icon: 'warning',
          title: message,
          timer: 2000,
        });
      }
    }
  });
}

jQuery_money("select[name=tag_lang]").change(function() {
  if(jQuery_money(this).val() !== "") {
    var data = {
      action: 'get_cmp',
      lang: jQuery_money(this).val()
    };

    jQuery.post(the_ajax_script.ajaxurl, data, function (response) {
      // success
      var length_str = response.length -1; // wordpress always return string + '0'
      var new_response = response.substr(0, length_str); // wordpress always return string + '0' so we delete it

      jQuery_money('#script_tag').html(new_response);
      if (new_response !== '' && new_response !== '<title>CMP The Moneytizer</title>') {
        jQuery_money('#script_tag textarea').css('height', '300px');
      }
    });
  }
});

jQuery_money('#themoney-copy-cmp').click(function () {
  var copyText = document.querySelector('#script_tag textarea');
  copyText.select();
  document.execCommand("copy");
  switch (lang) {
    case 'fr':
      var message = 'Contenu copié dans le presse papier !';
      break;
    case 'es':
      var message = '¡Contenido copiado en el portapapeles!';
      break;
    case 'it':
      var message = 'Contenuto copiato negli appunti!';
      break;
    case 'pt':
      var message = 'Conteúdo copiado no papel de imprensa !';
      break;
    case 'de':
      var message = 'Inhalt in Zwischenablage gespeichert!';
      break;
    case 'ru':
      var message = 'Данные скопированы в браузер!';
      break;
    case 'pl':
      var message = 'Zawartość skopiowana do schowka!';
      break;
    case 'us':
    case 'en':
    default:
      var message = 'Content copied in the clipboard!';
  }
  swal({
    icon: 'success',
    title: message,
    timer: 2000,
  });
});

function checkCmp(siteId) {
  var data = {
    action: 'check_cmp',
    siteId: siteId
  };

  jQuery.post(the_ajax_script.ajaxurl, data, function(response) {
    var result = JSON.parse(response.substr(0, response.length-1));

    if (result['error'] === true) {
      if (result['type'] === 'server') {
        switch (lang) {
          case 'fr':
            var message = 'Erreur, veuillez essayer ultérieurement';
            break;
          case 'es':
            var message = 'Error. Inténtalo más tarde';
            break;
          case 'it':
            var message = 'Errore, prego riprova';
            break;
          case 'pt':
            var message = 'Erro, por favor tente novamente mais tarde';
            break;
          case 'de':
            var message = 'Fehler. Bitte versuchen Sie es später noch einmal';
            break;
          case 'ru':
            var message = 'Ошибка, попробуйте позже';
            break;
          case 'us':
          case 'en':
          default:
            var message = 'Error, please try later';
        }
        swal({
          icon: 'error',
          title: message,
          timer: 2000,
        });
      }

      swal({
        icon: 'error',
        title: message,
      });
    } else {
      if (result['type'] === 'ok') {
        switch (lang) {
          case 'fr':
            var message = 'Votre bandeau de consentement est bien intégré !';
            break;
          case 'es':
            var message = '¡El banner de consentimiento esta integrado!';
            break;
          case 'it':
            var message = 'Il banner di consenso è inserito correttamente!';
            break;
          case 'pt':
            var message = 'O seu banner de consentimento está bem integrado !';
            break;
          case 'de':
            var message = 'Ihr Consent-Banner ist korrekt integriert';
            break;
          case 'ru':
            var message = 'Ваш баннер GDPR интегрирован !';
            break;
          case 'us':
          case 'en':
          default:
            var message = 'Your consent banner is well integrated!';
        }
        swal({
          icon: 'success',
          title: message,
          timer: 2000,
        });
      }
      else if (result['type'] === 'no') {
        switch (lang) {
          case 'fr':
            var message = 'Votre bandeau n\'est pas intégré !';
            break;
          case 'es':
            var message = '¡El banner no esta integrado!';
            break;
          case 'it':
            var message = 'Il banner di consenso non è inserito!';
            break;
          case 'pt':
            var message = 'O seu banner de consentimento não está integrado !';
            break;
          case 'de':
            var message = 'Ihr Consent-Banner ist nicht integriert';
            break;
          case 'ru':
            var message = 'Ваш баннер GDPR не интегрирован !';
            break;
          case 'us':
          case 'en':
          default:
            var message = 'Your consent banner is not integrated!';
        }
        swal({
          icon: 'warning',
          title: message,
          timer: 2000,
        });
      }
    }
  });
}

function resetPlugin() {
  var data = {
    action: 'reset_plugin',
  };
  
  jQuery.post(the_ajax_script.ajaxurl, data, function(response) {
    window.location.href = 'options-general.php?page=themoneytizer';
  });
}


// ADS.TXT & CMP END


// FORMAT DELIVERY START

function reactivateTag(tagId) {
  var data = {
    action: 'reactivate_tag',
    tagID: tagId
  };

  jQuery_money.post(the_ajax_script.ajaxurl, data, function(response) {
    var result = JSON.parse(response.substr(0, response.length-1));

    if (result['error'] === true) {
      if (result['type'] === 'server') {
        switch (lang) {
          case 'fr':
            var message = 'Erreur, veuillez essayer ultérieurement';
            break;
          case 'es':
            var message = 'Error. Inténtalo más tarde';
            break;
          case 'it':
            var message = 'Errore, prego riprova';
            break;
          case 'pt':
            var message = 'Erro, por favor tente novamente mais tarde';
            break;
          case 'de':
            var message = 'Fehler. Bitte versuchen Sie es später noch einmal';
            break;
          case 'ru':
            var message = 'Ошибка, попробуйте позже';
            break;
          case 'us':
          case 'en':
          default:
            var message = 'Error, please try later';
        }
        swal({
          icon: 'error',
          title: message,
          timer: 2000,
        });
      }
    }
    else {
      jQuery_money('#tag_' + tagId).attr("disabled", false);

      switch (lang) {
        case 'fr':
          var message = 'Tag ré-activé !';
          break;
        case 'es':
          var message = '¡Tag reactivado!';
          break;
        case 'it':
          var message = 'Tag riattivato!';
          break;
        case 'pt':
          var message = 'Tag reactivado !';
          break;
        case 'de':
          var message = 'Ad Tag reaktiviert!';
          break;
        case 'ru':
          var message = 'Таг активирован!';
          break;
        case 'us':
        case 'en':
        default:
          var message = 'Tag reactivated!';
      }
      swal({
        icon: 'success',
        title: message,
        timer: 2000,
      });
    }
  });
}

function generateTag(adId, siteId) {
  var data = {
    action: 'generate_tag',
    adID: adId,
    siteID: siteId
  };

  jQuery_money.post(the_ajax_script.ajaxurl, data, function(response) {
    var result = JSON.parse(response.substr(0, response.length-1));

    if (result['error'] === true) {
      if (result['type'] === 'server') {
        switch (lang) {
          case 'fr':
            var message = 'Erreur, veuillez essayer ultérieurement';
            break;
          case 'es':
            var message = 'Error. Inténtalo más tarde';
            break;
          case 'it':
            var message = 'Errore, prego riprova';
            break;
          case 'pt':
            var message = 'Erro, por favor tente novamente mais tarde';
            break;
          case 'de':
            var message = 'Fehler. Bitte versuchen Sie es später noch einmal';
            break;
          case 'ru':
            var message = 'Ошибка, попробуйте позже';
            break;
          case 'us':
          case 'en':
          default:
            var message = 'Error, please try later';
        }
        swal({
          icon: 'error',
          title: message,
          timer: 2000,
        });
      } else if (result['type'] === 'entries') {
        switch (lang) {
          case 'fr':
            var message = 'Woops ! Mauvais paramètres !';
            break;
          case 'es':
            var message = '¡Uy! Datos incorrectos.';
            break;
          case 'it':
            var message = 'Woops! Impostazioni sbagliate!';
            break;
          case 'pt':
            var message = 'Oops ! Configurações erradas !';
            break;
          case 'de':
            var message = 'Oops! Falsche Parameter!';
            break;
          case 'ru':
            var message = 'Упс!Ошибка в настройках!';
            break;
          case 'us':
          case 'en':
          default:
            var message = 'Oops! Bad parameter!';
        }
        swal({
          icon: 'error',
          title: message,
          timer: 2000,
        });
      }
    }
    else {
      switch (lang) {
        case 'fr':
          var message = 'Script généré !';
          break;
        case 'es':
          var message = '¡Script generado!';
          break;
        case 'it':
          var message = 'Script generato!';
          break;
        case 'pt':
          var message = 'Script gerado !';
          break;
        case 'de':
          var message = 'Skript generiert!';
          break;
        case 'ru':
          var message = 'Cкрипт готов!';
          break;
        case 'us':
        case 'en':
        default:
          var message = 'Script generated!';
      }
      swal({
        icon: 'success',
        title: message,
        timer: 2000,
      });

      jQuery_money('#generate-' + adId + '-' + siteId).removeAttr('onclick');
      jQuery_money('#generate-' + adId + '-' + siteId).addClass('cursor-default');
    }
  });
}

function addFormat(adId, siteId) {
  var data = {
    action: 'put_format_on_pending',
    adID: adId,
    siteID: siteId
  };

  jQuery_money.post(the_ajax_script.ajaxurl, data, function(response) {
    var result = JSON.parse(response.substr(0, response.length-1));

    if (result['error'] === true) {
      if (result['type'] === 'server') {
        switch (lang) {
          case 'fr':
            var message = 'Erreur, veuillez essayer ultérieurement';
            break;
          case 'es':
            var message = 'Error. Inténtalo más tarde';
            break;
          case 'it':
            var message = 'Errore, prego riprova';
            break;
          case 'pt':
            var message = 'Erro, por favor tente novamente mais tarde';
            break;
          case 'de':
            var message = 'Fehler. Bitte versuchen Sie es später noch einmal';
            break;
          case 'ru':
            var message = 'Ошибка, попробуйте позже';
            break;
          case 'us':
          case 'en':
          default:
            var message = 'Error, please try later';
        }
        swal({
          icon: 'error',
          title: message,
          timer: 2000,
        });
      }
    }
    else {
      switch (lang) {
        case 'fr':
          var message = 'Format demandé !';
          break;
        case 'es':
          var message = '¡Formato solicitado!';
          break;
        case 'it':
          var message = 'Formato richiesto!';
          break;
        case 'pt':
          var message = 'Formato solicitado !';
          break;
        case 'de':
          var message = 'Format angefragt!';
          break;
        case 'ru':
          var message = 'Запрошенный формат';
          break;
        case 'us':
        case 'en':
        default:
          var message = 'Format requested!';
      }
      swal({
        icon: 'success',
        title: message,
        timer: 2000,
      });
    }
  });
}

// FORMAT DELIVERY CMP END


// PROFILE & BANK EDITING START
var type_structure = jQuery_money('input[name="themoney_type_structure"]:checked').val();
if(type_structure == 2 || type_structure == 4){
  if(type_structure == 2){
    jQuery_money("#tva_money_up").addClass("not-show");

    jQuery_money("input[name='user_tva_money']").val('');
  }else{
    jQuery_money("#tva_money_up").removeClass("not-show");
  }
  jQuery_money(".professionnel").removeClass("not-show");
}

jQuery_money('input[name="themoney_type_structure"]').on('click', function () {
  type_structure = jQuery_money('input[name="themoney_type_structure"]:checked').val();
  if(type_structure == 2 || type_structure == 4){
    if(type_structure == 2){
      jQuery_money("#tva_money_up").addClass("not-show");

      jQuery_money("input[name='user_tva_money']").val('');
    }else{
      jQuery_money("#tva_money_up").removeClass("not-show");
    }
    jQuery_money(".professionnel").removeClass("not-show");
  } else{
    jQuery_money(".professionnel").addClass("not-show");
    jQuery_money("#tva_money_up").addClass("not-show");

    jQuery_money("input[name='user_entreprise_money']").val('');
    jQuery_money("input[name='user_siren_money']").val('');
    jQuery_money("input[name='user_tva_money']").val('');
  }
});

jQuery_money('#update_form').validate({
  rules: {
    nom_money: {
      required: true
    },
    prenom_money: {
      required: true
    },
    mail_money: {
      required: true
    },
    tel_money: {
      required: true,
      number: true,
      minlength: 10
    },
    ville_money: {
      required: true
    },
    cp_money: {
      required: true
    }
  }
});

jQuery_money('#update_form').submit(function (e) {
  e.preventDefault();

  if(jQuery(this).valid()) {
    var data = {
      action: 'update',

      nom: jQuery('#nom_money').val(),

      prenom: jQuery('#prenom_money').val(),

      mail: jQuery('#mail_money').val(),

      tel: jQuery('#tel_money').val(),

      adresse: jQuery('#adresse_money').val(),

      ville: jQuery('#ville_money').val(),

      cp: jQuery('#cp_money').val(),

      pays: jQuery('#country_money').val(),

      structure: jQuery('input[name="themoney_type_structure"]:checked').val(),

      entreprise: jQuery('#user_entreprise_money').val(),

      siren: jQuery('#user_siren_money').val(),

      tva: jQuery('#user_tva_money').val(),
    };

    jQuery.post(the_ajax_script.ajaxurl, data, function(response) {
      var result = JSON.parse(response.substr(0, response.length-1));

      if (result['error'] === true) {
        if (result['type'] === 'server') {
          switch (lang) {
            case 'fr':
              var message = 'Erreur, veuillez essayer ultérieurement';
              break;
            case 'es':
              var message = 'Error. Inténtalo más tarde';
              break;
            case 'it':
              var message = 'Errore, prego riprova';
              break;
            case 'pt':
              var message = 'Erro, por favor tente novamente mais tarde';
              break;
            case 'de':
              var message = 'Fehler. Bitte versuchen Sie es später noch einmal';
              break;
            case 'ru':
              var message = 'Ошибка, попробуйте позже';
              break;
            case 'us':
            case 'en':
            default:
              var message = 'Error, please try later';
          }
          swal({
            icon: 'error',
            title: message,
            timer: 2000,
          });
        }
        else if (result['type'] === 'bad_info') {
          switch (lang) {
            case 'fr':
              var message = 'Vous n\'êtes pas autorisés à modifier ces informations';
              break;
            case 'es':
              var message = 'No estás autorizado a cambiar esta información';
              break;
            case 'it':
              var message = 'Non ti è permesso modificare queste informazioni';
              break;
            case 'pt':
              var message = 'Você não tem permissão para modificar essas informações por conta própria';
              break;
            case 'de':
              var message = 'Sie sind nicht berechtigt, diese Informationen selbst zu ändern. Kontaktieren Sie dazu bitte Ihren Account Manager oder schreiben Sie eine Mail an germany@themoneytizer.com.';
              break;
            case 'ru':
              var message = 'You are not allowed to modify these information';
              break;
            case 'us':
            case 'en':
            default:
              var message = 'You are not allowed to modify these information';
          }
          swal({
            icon: 'error',
            title: message,
            timer: 2000,
          });
        }
      }
      else {
        switch (lang) {
          case 'fr':
            var message = 'Modifications effectuées avec succès !';
            break;
          case 'es':
            var message = 'Modifications effectuées avec succès !';
            break;
          case 'it':
            var message = 'Modifications effectuées avec succès !';
            break;
          case 'pt':
            var message = 'Modifications effectuées avec succès !';
            break;
          case 'de':
            var message = 'Änderungen erfolgreich abgeschlossen!';
            break;
          case 'ru':
            var message = 'Изменения прошли успешно!';
            break;
          case 'us':
          case 'en':
          default:
            var message = 'Your changes were registered !';
        }
        swal({
          icon: 'success',
          title: message,
          timer: 2000,
        });
      }
    });
  }
});

jQuery_money('#bankChoice2').on('click',function () {
  jQuery_money(".paypal_line").removeClass("not-show");
  jQuery_money(".bank-line").addClass("not-show");

  jQuery_money("input[name='user_bank_name_money']").val('');
  jQuery_money("input[name='user_bank_namebank_money']").val('');
  jQuery_money("input[name='user_bank_adressbank_money']").val('');
  jQuery_money("input[name='user_bank_zipbank_money']").val('');
  jQuery_money("input[name='user_bank_citybank_money']").val('');
  jQuery_money("input[name='user_bank_iban_money']").val('');
  jQuery_money("input[name='user_bank_bic_money']").val('');
  jQuery_money("select[name='user_bank_countrybank_money']").val('');
});

jQuery_money('#bankChoice1').on('click',function () {
  jQuery_money(".paypal_line").addClass("not-show");
  jQuery_money(".bank-line").removeClass("not-show");

  jQuery_money("input[name='paypal_money']").val('');
});

jQuery_money('#update_bank_data').validate({
  rules: {
    user_bank_name_money: {
      required: true
    },
    user_bank_namebank_money: {
      required: true
    },
    user_bank_adressbank_money: {
      required: true
    },
    user_bank_citybank_money: {
      required: true
    },
    user_bank_zipbank_money: {
      required: true
    },
    user_bank_countrybank_money: {
      required: true
    },
    user_bank_iban_money: {
      required: true
    },
    user_bank_bic_money: {
      required: true
    },
    paypal_money: {
      required: true,
      email: true
    }
  }
});

jQuery_money('#update_bank_data').submit(function (e) {
  e.preventDefault();
  
  var dayOfTheDay = new Date();
  var today = dayOfTheDay.getDate();
  
  if (today >= 5 && today <= 10) {
    switch (lang) {
      case 'fr':
        var message = 'La modification de vos champs personnels de paiement est impossible du 5 au 10 inclus, chaque mois';
        break;
      case 'es':
        var message = 'No es posible modificar el método de pago o coordenadas bancarias entre el 5 y el 10 de cada mes';
        break;
      case 'it':
        var message = 'La modifica dei tuoi dati personali di pagamento non è possibile dal 5 al 10 incluso di ogni mese';
        break;
      case 'pt':
        var message = 'Não é possível alterar os seus dados de pagamento entre o dia 5 e o dia 10';
        break;
      case 'de':
        var message = 'Es ist nicht möglich, deine Zahlungsinformationen im Zeitraum vom 5. bis einschließlich 10. eines jeden Monat zu ändern';
        break;
      case 'ru':
        var message = 'Изменение ваших банковских данных невозможно с 5 до 10 числа включительно каждого месяца';
        break;
      case 'us':
      case 'en':
      default:
        var message = 'It is not possible to change your personal payment fields from the 5th to the 10th of each month';
    }
    swal({
      icon: 'error',
      title: message,
    });
  }
  else {
    if(jQuery(this).valid()) {
      var data = {
        action: 'update_bank_data',
      
        bank_name: jQuery('#user_bank_name_money').val().trim(),
      
        bank_iban: jQuery('#user_bank_iban_money').val().trim(),
      
        bank_bic: jQuery('#user_bank_bic_money').val().trim(),
      
        bank_name_bank: jQuery('#user_bank_namebank_money').val().trim(),
      
        bank_adress_bank: jQuery('#user_bank_adressbank_money').val().trim(),
      
        bank_country_bank: jQuery('#user_bank_countrybank_money').val().trim(),
      
        bank_city_bank: jQuery('#user_bank_citybank_money').val().trim(),
      
        bank_zip_bank: jQuery('#user_bank_zipbank_money').val().trim(),
      
        paypal_money: jQuery('#paypal_money').val().trim()
      };
    
      jQuery.post(the_ajax_script.ajaxurl, data, function(response) {
        var result = JSON.parse(response.substr(0, response.length-1));
      
        if (result['error'] === true) {
          if (result['type'] === 'server') {
            switch (lang) {
              case 'fr':
                var message = 'Erreur, veuillez essayer ultérieurement';
                break;
              case 'es':
                var message = 'Error. Inténtalo más tarde';
                break;
              case 'it':
                var message = 'Errore, prego riprova';
                break;
              case 'pt':
                var message = 'Erro, por favor tente novamente mais tarde';
                break;
              case 'de':
                var message = 'Fehler. Bitte versuchen Sie es später noch einmal';
                break;
              case 'ru':
                var message = 'Ошибка, попробуйте позже';
                break;
              case 'us':
              case 'en':
              default:
                var message = 'Error, please try later';
            }
            swal({
              icon: 'error',
              title: message,
            });
          }
          if (result['type'] === 'period') {
            switch (lang) {
              case 'fr':
                var message = 'La modification de vos champs personnels de paiement est impossible du 5 au 10 inclus, chaque mois';
                break;
              case 'es':
                var message = 'No es posible modificar el método de pago o coordenadas bancarias entre el 5 y el 10 de cada mes';
                break;
              case 'it':
                var message = 'La modifica dei tuoi dati personali di pagamento non è possibile dal 5 al 10 incluso di ogni mese';
                break;
              case 'pt':
                var message = 'Não é possível alterar os seus dados de pagamento entre o dia 5 e o dia 10';
                break;
              case 'de':
                var message = 'Es ist nicht möglich, deine Zahlungsinformationen im Zeitraum vom 5. bis einschließlich 10. eines jeden Monat zu ändern';
                break;
              case 'ru':
                var message = 'Изменение ваших банковских данных невозможно с 5 до 10 числа включительно каждого месяца';
                break;
              case 'us':
              case 'en':
              default:
                var message = 'It is not possible to change your personal payment fields from the 5th to the 10th of each month';
            }
            swal({
              icon: 'error',
              title: message,
            });
          }
        }
        else {
          switch (lang) {
            case 'fr':
              var message = 'Modifications effectuées avec succès !';
              break;
            case 'es':
              var message = 'Modifications effectuées avec succès !';
              break;
            case 'it':
              var message = 'Modifications effectuées avec succès !';
              break;
            case 'pt':
              var message = 'Modifications effectuées avec succès !';
              break;
            case 'de':
              var message = 'Änderungen erfolgreich abgeschlossen!';
              break;
            case 'ru':
              var message = 'Изменения прошли успешно!';
              break;
            case 'us':
            case 'en':
            default:
              var message = 'Your changes were registered !';
          }
          swal({
            icon: 'success',
            title: message,
            timer: 2000,
          });
        }
      });
    }
  }
});

// PROFILE & BANK EDITING END


// STATISTICS START

jQuery_money('#periode').bind('change', function (e) {
  if( jQuery_money('#periode').val() == 'custom_date') {
    jQuery_money('#custom_date').show();
    jQuery_money('#custom_date').css({ display: "inline-block" });
  }else{
    jQuery_money('#custom_date').hide();
  }
}).trigger('change');

jQuery_money(function() {
  jQuery_money( "#custom_date_from" ).datepicker();
});

jQuery_money(function() {
  jQuery_money( "#custom_date_to" ).datepicker();
});

jQuery_money('#periode').change(function() {
  jQuery_money("#custom_date_from").val('');
  jQuery_money("#custom_date_to").val('');
});

// STATISTICS END