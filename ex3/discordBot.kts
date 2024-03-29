import com.gitlab.kordlib.common.entity.Snowflake
import com.kordlib.core.Kord
import com.gitlab.kordlib.core.event.message.MessageCreateEvent
import com.gitlab.kordlib.core.on
import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*


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
