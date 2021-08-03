<?php
    require_once(__DIR__.'/vendor/autoload.php');
    use \Mailjet\Resources;
    
    define('API_USER', '9ce4bbcf5d6619d20a4d4699bf1a160a');
    define('API_LOGIN', 'd0bd4877c9232bcf6862a3b08660a7df');
    
    $mj = new \Mailjet\Client(API_USER,API_LOGIN,true,['version' => 'v3.1']);
    
    if(!empty($_POST['Nom']) && !empty($_POST['Email']) && !empty($_POST['Subject']) && !empty($_POST['Message'])){
        
        $name = htmlspecialchars($_POST['Name']);
        $email = htmlspecialchars($_POST['Email']);
        $subject = htmlspecialchars($_POST['Subject']);
        $message = htmlspecialchars($_POST['Message']);

        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $body = [
                'Messages' => [
                  [
                    'From' => [
                      'Email' => "ngbamedistingue@yahoo.com",
                      'Name' => "$name"
                    ],
                    'To' => [
                      [
                        'Email' => "ngbamedistingue@yahoo.com",
                        'Name' => "NoSignal"
                      ]
                    ],
                    'Subject' => "$subject",
                    'TextPart' => "$email, $message",
                    'CustomID' => "AppGettingStartedTest"
                  ]
                ]
            ];
            $response = $mj->post(Resources::$Email, ['body' => $body]);
            $response->success();
            echo "Email envoyé avec succès !";
        }else{
            echo "Email non valide";
        }
    }else{
        header('Location:index.html');
        die();
    }