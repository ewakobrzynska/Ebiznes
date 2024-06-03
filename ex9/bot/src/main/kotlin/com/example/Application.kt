package com.example

import io.ktor.server.application.*
import io.ktor.server.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.http.*
import io.ktor.client.request.*
import io.ktor.server.response.*
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.server.request.*
import io.ktor.client.statement.*
import io.ktor.serialization.gson.*
import io.ktor.client.plugins.contentnegotiation.*
import DiscordBot

fun main() {
    // Pobierz token Discorda z zmiennych środowiskowych
    val discordToken = System.getenv("discord_token") ?: throw IllegalStateException("Missing DISCORD_TOKEN environment variable")

    // Utwórz instancję DiscordBot
    val discordBot = DiscordBot()

    // Rozpocznij serwer Ktor
    embeddedServer(Netty, port = 8080) {
        module()
    }.start(wait = true)
}


fun Application.module() {
    routing {
        post("/analyze") {
            val request = call.receive<Map<String, String>>()
            val message = request["message"] ?: return@post call.respondText(
                "Missing message",
                status = HttpStatusCode.BadRequest
            )
            val response = analyzeMessage(message)
            call.respond(mapOf("response" to response))
        }
    }
}

private suspend fun analyzeMessage(message: String): String {
    val client = HttpClient(CIO) {
        install(ContentNegotiation) {
            gson{
                setPrettyPrinting()
            }
        }
    }
    return try {
        val response: HttpResponse = client.get("http://localhost:5000/analyze") {
            parameter("message", message)
        }
        response.bodyAsText()
    } catch (e: Exception) {
        e.printStackTrace()
        "Error analyzing message"
    } finally {
        client.close()
    }
}

