import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm") version "1.9.22"
    kotlin("plugin.serialization") version "1.9.22"
    id("application")
}

repositories {
    mavenCentral()
}

application {
    // Określenie głównej klasy aplikacji
    mainClass.set("MainKt")
}

dependencies {
    implementation("io.ktor:ktor-server-core:1.6.6")
    implementation("io.ktor:ktor-server-netty:1.6.6")
    implementation("io.ktor:ktor-client-core:1.6.6")
    implementation("io.ktor:ktor-client-cio:1.6.6")
    implementation("io.ktor:ktor-client-json:1.6.6")
    implementation("io.ktor:ktor-client-serialization:1.6.6")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.3.0")
}

tasks.withType<KotlinCompile> {
    kotlinOptions.jvmTarget = "1.8"
}
