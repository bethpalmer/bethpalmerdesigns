<?php

// an email address that will be in the From field of the email.
$from = 'Demo contact form <website@bethpalmerdesigns.com>';

// an email address that will receive the email with the output of the form
$sendTo = 'Demo contact form <hello@bethpalmerdesigns.co.uk>';

// subject of the email
$subject = 'GRAPHIC DESIGN CONTACT from website';

// form field names and their translations.
// array variable name => Text to appear in the email
$fields = array(
    'first-name' => 'First name:',
    'last-name' => 'Last name:',
    'phone' => 'Phone:',
    'email' => 'Email:',
    'company' => 'Company name:',
    'address1' => 'Address 1:',
    'address2' => 'Address 2:',
    'city' => 'City:',
    'postcode' => 'Postcode:',
    'gr-rebrand' => 'New projet or rebrand?',
    'gr-tagline' => 'Company name and tag line:',
    'gr-deadline' => 'Project deadline:',
    'gr-budget' => 'Project budget:',
    'gr-other-requirements' => 'Other info on requirements:',
    'gr-function' => 'What the company does:',
    'gr-usp' => 'Competitors and company USPs:',
    'gr-target-audience' => 'Target audience:',
    'gr-marketing' => 'How do customers find you?',
    'gr-existing-site' => 'Existing site:',
    'gr-origin' => 'Origin of the company name:',
    'gr-brand-message' => 'Central brand message:',
    'gr-values' => '5 key words describing values and culture:',
    'gr-purpose' => 'Where the logo will be used:',
    'gr-personal-preference' => 'Personal preference:',
    'gr-other-info' => 'Any other useful info:',
    'gr-source' => 'Where did the client hear about me?'); 

/*
 *  The SENDING bit
 */

// if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
error_reporting(E_ALL & ~E_NOTICE);

$hasError = false;

try
{

    if(count($_POST) == 0) throw new \Exception('Form is empty');
            
    $emailText = "New message from GRAPHIC DESIGN contact form\n=============================\n";

    foreach ($_POST as $key => $value) {
        // If the field exists in the $fields array, include it in the email 
        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    if (isset($extra)) {
        $emailText .= "$extra";
    }

    // All the neccessary headers for the email.
    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );
    
    // Send email
    mail($sendTo, $subject, $emailText, implode("\n", $headers));

}
catch (\Exception $e)
{
    $hasError = true;
}

if ($hasError) {
    header("Location: fail.html");
} else {
    header("Location: success.html");
}


