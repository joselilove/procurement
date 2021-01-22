## Configuration
Local server
cp .env.local .env
Production Server
cp .env.production .env


## Run
node app

# On start up for EC2 Amazon linux 2
cp procurement.service /etc/systemd/system/procurement.service
systemctl daemon-reload
systemctl enable procurement.service
systemctl start procurement.service
systemctl status procurement.service