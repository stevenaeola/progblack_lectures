#!/bin/bash
sed '/^---/ d' PITCHME.md | sed '/^@/ d' | sed '/^:::/ d' | sed 's/{.*}//' > README.md

PATHEND=$(pwd | rev | cut -d'/' -f-2 | rev)

pandoc  -V theme=simple -t revealjs -s PITCHME.md -o PITCHME.html

git add .
git commit -m "Working on presentation $PATHEND"
git push -u origin main

