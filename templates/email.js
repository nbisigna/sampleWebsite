module.exports = (
  firstName,
  lastName,
  email,
  phone,
  message
) => `<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html" />
    <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0">
    <link href='https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700' rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Quicksand:300,400,700' rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
    <title>Contact Email</title>
    <style type="text/css">
        body {
            width: 100%;
            background-color: #ffffff;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
        }
        p,
        h1,
        h2,
        h3,
        h4 {
            margin-top: 0;
            margin-bottom: 0;
            padding-top: 0;
            padding-bottom: 0;
        }

        span.preheader {
            display: none;
            font-size: 1px;
        }

        html {
            width: 100%;
        }

        table {
            font-size: 14px;
            border: 0;
        }
        @media only screen and (max-width: 640px) {
            .main-header {
                font-size: 20px !important;
            }
            .main-section-header {
                font-size: 28px !important;
            }
            .show {
                display: block !important;
            }
            .hide {
                display: none !important;
            }
            .align-center {
                text-align: center !important;
            }
            .no-bg {
                background: none !important;
            }
            .main-image img {
                width: 440px !important;
                height: auto !important;
            }
            .divider img {
                width: 440px !important;
            }
            .container590 {
                width: 440px !important;
            }
            .container580 {
                width: 400px !important;
            }
            .main-button {
                width: 220px !important;
            }
            .section-img img {
                width: 320px !important;
                height: auto !important;
            }
            .team-img img {
                width: 100% !important;
                height: auto !important;
            }
        }

        @media only screen and (max-width: 479px) {
            .main-header {
                font-size: 18px !important;
            }
            .main-section-header {
                font-size: 26px !important;
            }
            .divider img {
                width: 280px !important;
            }
            .container590 {
                width: 280px !important;
            }
            .container590 {
                width: 280px !important;
            }
            .container580 {
                width: 260px !important;
            }
            .section-img img {
                width: 280px !important;
                height: auto !important;
            }
        }
    </style>
</head>

<body class="respond" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
    <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff">
        <tr>
            <td align="center">
                <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
                    <tr>
                        <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                    </tr>
                    <tr>
                        <td align="center">
                            <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">

                                <tr>
                                    <td align="center" height="70" style="height:70px;">
                                        <a href="" style="display: block; border-style: none !important; border: 0 !important;"><span style="color:black;font-size:3em;"><i class="fas fa-code"></i></span></a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
    <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff" class="bg_color">
        <tr>
            <td align="center">
                <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
                    <tr>
                        <td align="center" style="color: #343434; font-size: 24px; font-family: Quicksand, Calibri, sans-serif; font-weight:700;letter-spacing: 3px; line-height: 35px;"
                            class="main-header">
                            <div style="line-height: 35px">
                                Nick Bisignano
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td>
                    </tr>

                    <tr>
                        <td align="center">
                            <table border="0" width="40" align="center" cellpadding="0" cellspacing="0" bgcolor="eeeeee">
                                <tr>
                                    <td height="2" style="font-size: 2px; line-height: 2px;">&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td height="20" style="font-size: 20px; line-height: 20px;">&nbsp;</td>
                    </tr>

                    <tr>
                        <td align="left">
                            <table border="0" width="590" align="center" cellpadding="0" cellspacing="0" class="container590">
                                <tr>
                                    <td align="left" style="color: #888888; font-size: 16px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 24px;">
                                        <!-- section text ======-->

                                        <p style="line-height: 24px; margin-bottom:15px;">

                                            Hi Nick,

                                        </p>
                                        <p style="line-height: 24px;margin-bottom:15px;">
                                            ${message}
                                        </p>
                                        <p style="line-height: 24px">
                                            From,</br></br>
                                                  ${firstName}${' ' + lastName}
                                                  </br>
                                                  ${email}
                                                  </br>
                                                  ${phone}
                                        </p>

                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>





                </table>

            </td>
        </tr>

        <tr>
            <td height="40" style="font-size: 40px; line-height: 40px;">&nbsp;</td>
        </tr>

    </table>
    <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="2a2e36">

        <tr>
            <td align="center" style="background-color:#333333bd;">

                <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">

                    <tr>
                        <td height="50" style="font-size: 50px; line-height: 50px;">&nbsp;</td>
                    </tr>

                    <tr>
                        <td align="center">
                            <table border="0" width="380" align="center" cellpadding="0" cellspacing="0" style="border-collapse:collapse;"
                                class="container590">

                                <tr>
                                    <td align="center">
                                        <table border="0" align="center" cellpadding="0" cellspacing="0" class="container580">
                                            <tr>
                                                <td align="center" style="color: #cccccc; font-size: 16px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 26px;">
                                                    <div style="line-height: 26px">

                                                       Web Development

                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                    </tr>

                    <tr>
                        <td align="center">
                          <a href="http://nickbisignano.com" style="color: #fff; text-decoration: none;">
                            <table border="0" align="center" width="250" cellpadding="0" cellspacing="0" style="border:2px solid #ffffff;">
                                <tr>
                                    <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td align="center" style="color: #ffffff; font-size: 14px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 22px; letter-spacing: 2px;">  
                                        <div style="line-height: 22px;">
                                            Nick Bisignano
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td height="10" style="font-size: 10px; line-height: 10px;">&nbsp;</td>
                                </tr>

                            </table></a>
                        </td>
                    </tr>
                    <tr>
                        <td height="50" style="font-size: 50px; line-height: 50px;">&nbsp;</td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
    <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="ffffff" class="bg_color">
        <tr>
            <td height="60" style="font-size: 60px; line-height: 60px;">&nbsp;</td>
        </tr>
        <tr>
            <td align="center">
                <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590 bg_color">
                    <tr>
                        <td align="center">
                            <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590 bg_color">
                                <tr>
                                    <td>
                                        <table border="0" width="300" align="left" cellpadding="0" cellspacing="0" style="border-collapse:collapse;"
                                            class="container590">
                                            <tr>
                                                <td align="left">
                                                    <a href="" style="display: block; border-style: none !important; border: 0 !important;"><span style="color:black;font-size:2em;"><i class="fas fa-code"></span></i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td align="left" style="color: #888888; font-size: 14px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 23px;"
                                                    class="text_color">
                                                    <div style="color: #333333; font-size: 14px; font-family: 'Work Sans', Calibri, sans-serif; font-weight: 600; line-height: 23px;">
                                                        Email me: <br/> <a href="mailto:nicholas.bisignano@gmail.com?subject='Contact Email'" style="color: #888888; font-size: 14px; font-family: 'Hind Siliguri', Calibri, Sans-serif; font-weight: 400;">Nicholas.Bisignano@gmail.com</a>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <table border="0" width="2" align="left" cellpadding="0" cellspacing="0" style="border-collapse:collapse;"
                                            class="container590">
                                            <tr>
                                                <td width="2" height="10" style="font-size: 10px; line-height: 10px;"></td>
                                            </tr>
                                        </table>
                                        <table border="0" width="200" align="right" cellpadding="0" cellspacing="0" style="border-collapse:collapse;"
                                            class="container590">
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td height="60" style="font-size: 60px; line-height: 60px;">&nbsp;</td>
        </tr>
    </table>
    <table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="f4f4f4">
        <tr>
            <td height="25" style="font-size: 25px; line-height: 25px;">&nbsp;</td>
        </tr>
        <tr>
            <td align="center">
                <table border="0" align="center" width="590" cellpadding="0" cellspacing="0" class="container590">
                    <tr>
                        <td>
                            <table border="0" align="center" cellpadding="0" cellspacing="0" style="border-collapse:collapse;"
                                class="container590">
                                <tr>
                                    <td align="center" style="color: #aaaaaa; font-size: 14px; font-family: 'Work Sans', Calibri, sans-serif; line-height: 24px;">
                                        <div style="line-height: 24px;">

                                            <a href="http://github.com/nbisigna" target="_blank"><span style="font-size: 3em; color:black;padding:0 4px;"><i  class="fab fa-github"></i></span></a>
                                            <a href="http://linkedin.com/in/nbisigna" target="_blank"><span style="font-size: 3em; color:black;padding:0 4px;"><i  class="fab fa-linkedin"></i></span></a>
                                            <a href="https://www.npmjs.com/~nbisigna" target="_blank"><span style="font-size: 3em; color:black;padding:0 4px;"><i  class="fab fa-npm"></i></span></a>
                                            <a href="https://www.instagram.com/nickbisignano/" target="_blank"><span style="font-size: 3em; color:black;padding:0 4px;"><i  class="fab fa-instagram-square"></i></span></a>
                                            <a href="https://www.youtube.com/channel/UCcNI3QYJA2VeidzV-39UbMA" target="_blank"><span style="font-size: 3em; color:black;padding:0 4px;"><i  class="fab fa-youtube-square"></i></span></a>
                                            <a href="https://twitter.com/nickbisignano" target="_blank"><span style="font-size: 3em; color:black;padding:0 4px;"><i  class="fab fa-twitter"></i></span></a>
                                            <a href="https://facebook.com/nick.bisignano7/" target="_blank"><span style="font-size: 3em; color:black;padding:0 4px;"><i  class="fab fa-facebook-square"></i></span></a>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td align="center" height="30" style="font-size: 15px; line-height: 20px;">&copy Nick Bisignano</td>
        </tr>
    </table>
</body>
</html>`;
