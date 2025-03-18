# Website

https://waittimes.tannerhartwell.com 

A Next.js web app designed to display wait times for theme parks found in California and Florida.


# Deplyment Steps

Tutorial for deployment: https://www.sammeechward.com/deploying-full-stack-js-to-aws-ec2

Installing rsync: https://scicomp.aalto.fi/scicomp/rsynconwindows/

Upload to server: rsync -avz --exclude 'node_modules' --exclude '.next' --exclude '.git' --exclude '.env' \
-e "ssh -i ~/.desktop/your-key.pem" \
. ubuntu@ip-address:~/app

Restart service after upload: "npm run build" and then "sudo systemctl restart myapp.service"

