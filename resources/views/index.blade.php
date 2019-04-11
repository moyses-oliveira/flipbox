<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Flipbox</title>
    <base href="/">
    <link rel="icon" type="image/x-icon" href="favicon.ico"/>
    </head>
<body>
<app-root></app-root>
{!!
    Html::script('dist/runtime.js') .
    Html::script('dist/polyfills.js') .
    Html::script('dist/styles.js') .
    Html::script('dist/vendor.js') .
    Html::script('dist/main.js')
!!}
</body>
</html>