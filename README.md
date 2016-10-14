# Javascript implementation of Highrise style "Edit On Click" as a jQuery plugin

Sometimes pages get cluttered up when you have many input fields. This is really true when many of the fields could remain blank.

The original inspiration for this plugin comes from [here](http://37signals.com/designexplore/Highrise_Edit_Contacts).

Each input field that is blank and has this plugin assigned to it through the jQuery selector will be editable when clicked.

## Usage
0. Download and reference the JavaScript and CSS files manually in your HTML
1. You can add class and placeholder attribute to each field you want to be Edit on Click. Example: `<input name="first_name" type="text" calss="clicktoedit" placeholder="First Name">`
	You can also create groups of editable fields. For example, you will sometimes want to have a first and last name together.
  to do this you will simply put these items into a div and give that div the same class as editable items.
2. Call plugin through jQuery selector. Example:
```javascript
<script>
	$('.clicktoedit').textifyfields();
</script>
```
