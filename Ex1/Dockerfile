FROM ubuntu:22.04

ENV TZ=Europe/Warsaw
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update &&\
        apt-get upgrade -y &&\
    apt-get install -y software-properties-common &&\
        add-apt-repository ppa:deadsnakes/ppa &&\
        apt-get update &&\
        apt-get install -y python3.8

RUN apt-get install -y openjdk-8-jdk
RUN apt-get -y install kotlin

#RUN java -version
#RUN find / -name kotlinc
#RUN /usr/bin/kotlinc -version




