import asyncio


async def bar1():
    await asyncio.sleep(1)
    return "good result"


async def bar2(x):
    await asyncio.sleep(1)
    return x.replace("good", "better")


async def bar3(x):
    await asyncio.sleep(1)
    return x.replace("better", "best")


async def foo():
    return await bar3(await bar2(await bar1()))


loop = asyncio.get_event_loop()
print(loop.run_until_complete(foo()))
