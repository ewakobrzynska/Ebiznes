plugins {
    kotlin("jvm") version "1.9.23"
   // id("io.ktor.client") version "2.3.9"
    //id("io.ktor") version "2.3.9"
}

group = "org.example"
version = "1.0-SNAPSHOT"
val ktorversion = "2.3.9"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation("org.jetbrains.kotlin:kotlin-test")

}

dependencies {
    implementation("io.ktor:ktor-server-netty:$ktorversion")
    //implementation("io.ktor:ktor-gson:$ktorversion")
}

tasks.test {
    useJUnitPlatform()
}
kotlin {
    jvmToolchain(21)
    dependencies {
        implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.3.0")
    }
}

