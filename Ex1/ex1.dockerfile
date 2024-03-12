FROM ubuntu:22.04

ENV TZ=Europe/Warsaw

RUN apt-get update
RUN apt-get install -y software-properties-common
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt install -y python3.8