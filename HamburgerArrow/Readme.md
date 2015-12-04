<snippet>
  <content>
##Hamburger arrow
Simple hamburger to arrow transitioning icon, for material design
or whatever you need it for
## Installation

Add libraries, you need jquery for this to work

```bash

# OPTIONAL
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>

<link rel="stylesheet" href="../your/path/HamburgerArrow.css">
<script src="../your/path/HamburgerArrow.js"></script>
```

Create div for holding the icon

```bash
<div class="hamburger-icon"></div>
```

Initiate the script

```bash
<script>
	$('.hamburger-icon').hamburgerarrow();
</script>
```

##Parameters

You can add top, bottom, left or right parameters for the arrows turn
```bash
<script>
	$('.hamburger-idon').hamburgerarrow({rotate:"top"});
</script>
```

</content>

</snippet>
