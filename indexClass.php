<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

// start of class:

class contact
{
  public $name;
  public $email;
  public $tnumber;
  public $message;

  public function __construct($name, $email, $tnumber, $message)
  {
    $this->name = $name;
    $this->email = $email;
	$this->tnumber = $tnumber;
    $this->message = $message;
  }
  public function showInfo()
  {
    return 
	$this->name; 
	$this->lastname;
	$this->tnumber;
	$this->message;
  }
}

$sender = new contact;
echo $contact->showInfo(); 

//end of class


// name and email fields are required or page will return error

if (empty($_POST['name']) && empty($_POST['email'])) die();

if ($_POST)
	{

		// upon submission returns response code 200 (OK) and sends data to specified email address using data from form as subject and from fields.

		http_response_code(200);
			$subject = $_POST['name'];
			$to = "jamesmayell@hotmail.com";
			$from = $_POST['email'];

		// data captured format displayed in email
	
		$msg = $_POST['number'] . $_POST['message'];

		// Headers

			$headers = "MIME-Version: 1.0\r\n";
			$headers.= "Content-type: text/html; charset=UTF-8\r\n";
			$headers.= "From: <" . $from . ">";
		mail($to, $subject, $msg, $headers);

		echojson_encode(array(
		"sent" => true
	));
	}
  else
	{

		// tells the user about error

		echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>
