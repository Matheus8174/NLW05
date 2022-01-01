import { createContext, useState, ReactNode } from 'react'

type Episode = {
  title: string
  members: string
  thumbnail: string
  duration: number
  url: string
}

type PlayerContextData = {
  episodeList: Episode[]
  currentEpisodeIndex: number
  isPlaying: boolean
  playList: (list: Episode[], index: number) => void
  play: (episode: Episode) => void
  setPlayingState: (state: boolean) => void 
  togglePlay: () => void
  PlayNext: () => void
  PlayPrevious: () => void
}

export const PlayerContext = createContext({} as PlayerContextData)
//recebe como parametro o formato do dado

type PlayerContextProviderProps = {
  children: ReactNode
}

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  function playList(list: Episode[], index: number) {
    setEpisodeList(list)
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  function play(episode: Episode) {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  function togglePlay() {
    setIsPlaying(!isPlaying)
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state)
  }

  function playNext() {
    const nextEpisodeIndex = currentEpisodeIndex + 1
    
    if(nextEpisodeIndex >= episodeList.length) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1)
    }
  }

  function playPrevious() {
    if(currentEpisodeIndex > 0) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1)
    }
  }

  return (
    <PlayerContext.Provider 
      value={{
        playList,
        episodeList,
        currentEpisodeIndex, 
        play,
        playNext,
        playPrevious,
        isPlaying, 
        togglePlay, 
        setPlayingState
      }}>

      {children}
    </PlayerContext.Provider>
  )
}