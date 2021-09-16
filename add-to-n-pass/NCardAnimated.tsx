/* eslint-disable @next/next/no-img-element */
import { AspectRatio, Flex } from "@chakra-ui/react"
import React, { useMemo } from "react"
import { parseAndExtractImageFromURI } from "../../utils/metadata"
import { NCardProps } from "./props"


const NCardAnimated: React.FC<NCardProps> = ({ n, containerProps }) => {
  const svgData: string = useMemo(() => {
    return parseAndExtractImageFromURI(n.metadataURI)
  }, [n])

  return (
    <AspectRatio ratio={1}>
      <Flex justifyContent="center" className="nCardAnimated" alignItems="center" {...containerProps}>
          <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">
          <rect width="350px" height="350px" fill="black" />
          <g className="num1"><text x="10" y="20">{n.first}</text></g>
          <g className="num2"><text x="10" y="40">{n.second}</text></g>
          <g className="num3"><text x="10" y="60">{n.third}</text></g>
          <g className="num4"><text x="10" y="80">{n.fourth}</text></g>
          <g className="num5"><text x="10" y="100">{n.fifth}</text></g>
          <g className="num6"><text x="10" y="120">{n.sixth}</text></g>
          <g className="num7"><text x="10" y="140">{n.seventh}</text></g>
          <g className="num8"><text x="10" y="160">{n.eighth}</text></g>
          </svg>
      </Flex>
    </AspectRatio>
  )
}

export default NCardAnimated
