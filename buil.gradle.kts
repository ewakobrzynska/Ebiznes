plugins {
    kotlin("jvm") version "1.5.10"
}

dependencies {
    implementation("io.ktor:ktor-client-apache:$ktor_version")
    implementation("io.ktor:ktor-client-json:$ktor_version")
    implementation("io.ktor:ktor-client-serialization-jvm:$ktor_version")
}

val ktor_version = "1.6.5"
