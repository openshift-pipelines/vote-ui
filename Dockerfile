# Using official python runtime base image
FROM registry.access.redhat.com/ubi8/ubi

RUN dnf install -y python3 python3-pip

# Set the application directory
WORKDIR /app

# Install our requirements.txt
ADD requirements.txt /app/requirements.txt
RUN pip3 install -r requirements.txt

# Copy our code from the current folder to /app inside the container
ADD . /app
RUN chmod 0755 -R /app

# Make port 80 available for links and/or publish
EXPOSE 8080

# Define our command to be run when launching the container
#CMD ["gunicorn", "app:app", "-b", "0.0.0.0:8080", "--log-file", "-", "--access-logfile", "-", "--workers", "4", "--keep-alive", "0"]
CMD ["python", "./app.py"]
