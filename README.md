# Portfolio

This repository contains files to creat **two** different portfolio HTML pages. Each page includes logo, name, title, three different featured works and their github links. Both pages use Bootstrap and, are completely **_responsive_** to the width of the devices. 
## Versions

1. _Mockup version_ (portfolio.html) 
  
   : In this repository you may find the file **_design-mockup-portfolio.pdf_**. The _portfolio.html_ is written to make the page look as cloas as the given pdf file. To make it responsive, I made some structural changes to make the three featured work look clearer on the smaller devices. 

   Between the width 768px and 991px, the featured work will show in two columns. If the width becomes smaller than 768px, it will form a single   column and all the pictures and labels will be centered. (In all other cases, it should have the same format as the given pdf file.) 
   
   For any other specific css rule, please refer to the custom.css file in css folder. 

2. _My version_ (my_portfolio.html)
   
   : This version is written to be used as my own portfolio to present my work (in-progress) so far. In addition to the responsiveness of the basic version, small js changes were made. 
   
   If you hover around the **feature work image** and **label**, it will show up some popover/tooltip, which was written in simple jquery and included in the _my_portfolio.html_ file. By clicking the featured work images and github address, each event is supposed to link to the relevant webpage. In addition, clicking the featured work label should invoke the modal popup to provide basic information about the each work. 

## Notice

All the images used in the _my_portfolio.html_ are downloaded from https://pixabay.com/ that provides the copyright free images.
