# Website

https://waittimes.tannerhartwell.com 

A Next.js web app designed to display wait times for theme parks found in California and Florida.


# Deplyment Steps

Tutorial for deployment: https://www.sammeechward.com/deploying-full-stack-js-to-aws-ec2

Installing rsync: https://scicomp.aalto.fi/scicomp/rsynconwindows/

Stop service if needed: "sudo systemctl stop myapp.service"

Restart service after upload: "npm run build" and then "sudo systemctl restart myapp.service"

Edit caddy proxy server: "sudo vim /etc/caddy/Caddyfile" and then "sudo systemctl restart caddy"
