plugins {
    kotlin("jvm") version "1.6.10"
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("com.kordlib.kord:kord-core:0.8.3")
    implementation("com.kordlib.kord:kord-rest:0.8.3")
    implementation("com.kordlib.kord:kord-serialization:0.8.3")
    implementation("io.ktor:ktor-server-netty:1.6.10")
    implementation("io.ktor:ktor-client-json:1.6.10")
}
