import io.ktor.client.*
import io.ktor.client.engine.apache.*
import io.ktor.client.features.json.*
import io.ktor.client.request.*
import kotlinx.coroutines.runBlocking

data class DiscordMessage(val content: String)

class DiscordClient(private val token: String) {
    private val baseUrl = "https://discord.com/api/v9"
    private val httpClient = HttpClient(Apache) {
        install(JsonFeature) {
            serializer = GsonSerializer()
        }
    }

    fun sendMessage(channelId: String, message: DiscordMessage) {
        val url = "$baseUrl/channels/$channelId/messages"
        val authToken = "Bot $token"

        runBlocking {
            httpClient.post<Unit>(url) {
                headers {
                    append("Authorization", authToken)
                    append("Content-Type", "application/json")
                }
                body = message
            }
        }
    }
}

fun main() {
    // Wpisz swój token bota Discord
    val token = "TWÓJ_TOKEN"

    val discordClient = DiscordClient(token)

    // Wpisz ID kanału, na który chcesz wysłać wiadomość
    val channelId = "ID_KANAŁU"

    // Wiadomość do wysłania
    val message = DiscordMessage("Testowa wiadomość")

    // Wysłanie wiadomości
    discordClient.sendMessage(channelId, message)
}
