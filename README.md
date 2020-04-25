# README

<!-- Run two servers at the same time -->

foremant start -f Procfile.dev

<!-- Controllers Generation -->
<!--
< rails generate controller api/v1/Recipes index create show destroy -j=false -y=false --skip-template-engine --no-helper  >



j=false which instructs Rails to skip generating associated JavaScript files.
-y=false which instructs Rails to skip generating associated stylesheet files.
--skip-template-engine, which instructs Rails to skip generating Rails view files, since React is handling your front-end needs.
--no-helper, which instructs Rails to skip generating a helper file for your controller. -->
