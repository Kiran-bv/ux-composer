import React from 'react';
import {signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import AppConfig from '../../appConfig'
import Link from 'next/link'

const Auth = () => {

  const { data: session, status } = useSession();
  const [flag, setFlag] = React.useState(false);

  React.useEffect(async ()=>{
    console.log("Auth ::: UseEffect , ",status);
    if(status === "authenticated"){
      setFlag(true);
      console.log("Session after login ::: ", session);
      const res = await fetch(AppConfig.baseUrl+AppConfig.api.menu, {method: 'POST'});
      const data = await res.json();
      console.log("Login Data menu ::: ", data);
    }

  },[status])

  const getAuth = () => {
    if (status === "authenticated") {
      return <Box marginRight={2}
                padding={0.5}
                display={'inline-flex'}
                borderRadius={1}
                bgcolor={'primary.main'}
                marginLeft={1}
              >
                <Button  onClick={() => signOut({
                        callbackUrl: `http://localhost:3000`
                })}>
                  <Typography
                    variant={'caption'}
                    sx={{ color: 'common.white', lineHeight: 1 }}
                  >
                      SignOutMe
                  </Typography>
                </Button>
          </Box>
    }else{
      return <Box marginRight={2}
                padding={0.5}
                display={'inline-flex'}
                borderRadius={1}
                bgcolor={'primary.main'}
                marginLeft={1}
              >
                <Button  onClick={() => signIn()}>
                  <Typography
                    variant={'caption'}
                    sx={{ color: 'common.white', lineHeight: 1 }}
                  >
                      SignInMe
                  </Typography>
                </Button>
          </Box>
    }
  }

    return(
        <>
        {  flag && <>
              <Box marginLeft={4}>
                <Link href="/table">
                    Authenticated
                </Link>
              </Box>
            </>
        }
        {
            getAuth()
        }

        </>
    )

}
export default Auth;