import com.kordlib.common.entity.Snowflake
import com.kordlib.core.Kord
import com.kordlib.core.event.message.MessageCreateEvent
import com.kordlib.core.on
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*

fun main() {
    val botToken = "YOUR_BOT_TOKEN"
    val discordBot = Kord(botToken)

    embeddedServer(Netty, port = 8080) {
        install(ContentNegotiation) {
            // Potrzebne do obsługi JSON
        }
        routing {
            post("/discord") {
                val requestBody = call.receive<DiscordRequest>()
                val response = handleDiscordRequest(requestBody)
                call.respond(response)
            }
        }
    }.start(wait = true)

    discordBot.on<MessageCreateEvent> {
        if (message.author?.isBot == false) {
            val command = message.content
            val response = handleDiscordCommand(command)
            message.channel.createMessage(response)
        }
    }
}

data class DiscordRequest(
    val message: String,
    val userId: String
)

data class DiscordResponse(
    val message: String
)

fun handleDiscordRequest(request: DiscordRequest): DiscordResponse {
    // Tutaj obsłuż żądanie użytkownika
    return DiscordResponse("Response from Discord bot")
}

fun handleDiscordCommand(command: String): String {
    // Tutaj obsłuż komendę użytkownika
    return "Command executed: $command"
}
