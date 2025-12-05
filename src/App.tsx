import { YStack, H1, Text } from 'tamagui'

function App() {
  return (
    <YStack 
      flex={1} 
      justifyContent="center" 
      alignItems="center" 
      padding="$4" 
      backgroundColor="$background"
    >
      <H1 marginBottom="$4">Flight Timetable</H1>
      <Text fontSize="$5">
        Real-time collaborative flight scheduling
      </Text>
      <Text fontSize="$3" marginTop="$2" opacity={0.7}>
        Powered by Electric SQL, TanStack DB, Drizzle ORM, and Tamagui
      </Text>
    </YStack>
  )
}

export default App
