<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="Album Project HTML5 Template">
    <meta name="description" content="Album Project - HTML5 Template">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta property="og:title" content="Album Project">
    <meta property="og:description" content="Album Project HTML5 Template">
    <meta property="og:image" content="{{ asset('assets/img/preview-template/preview-template.png')}}">
    <title>Album Project</title>
    <!-- Apple Favicon -->
    <link rel="apple-touch-icon" href="{{ asset('assets/img/logo/favicon.svg')}}">
    <!-- All Device Favicon -->
    <link rel="icon" href="{{ asset('assets/img/logo/icon.svg')}}">
    <!-- Icon -->
    <link rel="stylesheet" href="{{ asset('assets/all-icons/myicon.css')}}">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css')}}">
    <!-- Plugin -->
    <link rel="stylesheet" href="{{ asset('assets/css/plugins.css')}}">
    <!-- Style -->
    <link rel="stylesheet" href="{{ asset('assets/css/style.css')}}">
    <!-- Responsive -->
    <link rel="stylesheet" href="{{ asset('assets/css/responsive.css')}}">
</head>

<body>
    <div id="root">
        @yield('content')
    </div>
    <!-- jQuery -->
    <script src="{{ asset('assets/js/jquery-3.7.1.min.js')}}"></script>
    <!-- Bootstrap -->
    <script src="{{ asset('assets/js/bootstrap.min.js')}}"></script>
    <!-- Plugins -->
    <script src="{{ asset('assets/js/plugins.js')}}"></script>
    <!-- Index -->
    <script src="{{ asset('assets/js/index.js')}}"></script>
</body>

</html>
